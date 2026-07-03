# AIvance 홈페이지 — 배포 가이드

AIvance 모(母) 브랜드 원페이지 홈페이지입니다. 정적 페이지(HTML/CSS/JS)에 **도입 문의 폼**(PHP + Gmail SMTP)이 결합된 구조로, 웹 서버 문서 루트(document root)를 **`source/`** 로 지정해 배포합니다.

- 홈페이지: 히어로 · 3제품(AICura/AICopia/AICreo) · 철학 · 기술 · CTA · 문의 폼 · 푸터
- 제품 샘플 디자인: `source/products/aicura.html` · `aicopia.html` · `aicreo.html`
- 회사소개서 PDF 다운로드: `source/downloads/AIvance_회사소개서.pdf`
- 문의 폼 → **advisor@aivance.kr** 로 메일 발송 (인증·발신 계정 `blumine@gmail.com`, Gmail SMTP)

---

## 1. 요구 사항

| 항목 | 버전/조건 |
|------|-----------|
| PHP | **8.1 이상** (세션·`filter_var`·`hash_equals` 사용) |
| Composer | 2.x (의존성 설치) |
| 웹 서버 | Nginx 또는 Apache + PHP-FPM (프로덕션) / `php -S` (로컬) |
| 메일 | Gmail 계정 + **앱 비밀번호**(2단계 인증 필요) |

의존성(`source/composer.json`): `phpmailer/phpmailer`, `vlucas/phpdotenv`

---

## 2. 디렉터리 구조

```
source/                     ← 웹 문서 루트 (docroot)
├── index.html              메인 페이지
├── contact.php             문의 폼 엔드포인트 (Gmail SMTP 발송)
├── css/                    styles.css · samples.css
├── js/                     contact.js (폼 제출)
├── products/               제품 샘플 디자인 3종
├── downloads/              회사소개서 PDF
├── composer.json / .lock   PHP 의존성 정의
├── vendor/                 Composer 설치물 (git 미추적 — 배포 시 생성)
├── .env                    실제 자격증명 (git 미추적 — 서버에서 직접 작성)
└── .env.example            .env 템플릿
```

> `.env` 와 `vendor/` 는 `source/.gitignore` 로 저장소에 포함되지 않습니다. 배포 서버에서 각각 생성합니다.

---

## 3. 로컬 실행

```bash
cd source

# 1) 의존성 설치
composer install

# 2) 환경변수 파일 생성 후 값 채우기
cp .env.example .env
#   → .env 의 SMTP_PASS 에 Gmail 앱 비밀번호 입력

# 3) 개발 서버 실행 (PHP 내장 서버)
php -S 127.0.0.1:4173 -t .
```

브라우저에서 <http://127.0.0.1:4173> 접속. 문의 폼 제출 시 실제로 메일이 발송됩니다.

> 이 저장소에는 편의를 위한 `.claude/launch.json`(`aivance-source`, `php -S 127.0.0.1:4173 -t source`)이 포함되어 있어 미리보기 도구로도 바로 구동됩니다.

---

## 4. 환경변수 (`source/.env`)

```dotenv
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=ssl                 # ssl(465) 또는 tls(587)
SMTP_USER=blumine@gmail.com     # 인증 계정 (실제 로그인 가능한 Gmail)
SMTP_PASS=xxxxxxxxxxxxxxxx       # Gmail 앱 비밀번호 16자리 (공백 없이)
MAIL_FROM=blumine@gmail.com     # 발신 주소 (Gmail 인증 계정 또는 검증된 별칭)
MAIL_FROM_NAME="AIvance 홈페이지 문의"
MAIL_TO=advisor@aivance.kr      # 문의 수신함
ALLOWED_ORIGIN=https://aivance.kr   # 폼이 올라간 사이트 주소 (CORS). 로컬은 *
```

**Gmail 앱 비밀번호 발급**: Google 계정 → 보안 → 2단계 인증 활성화 → **앱 비밀번호** → 16자리 발급 후 공백 없이 `SMTP_PASS` 에 입력. (일반 로그인 비밀번호로는 SMTP 인증 불가)

> 값에 공백이 있으면 큰따옴표로 감쌉니다(`MAIL_FROM_NAME` 처럼). phpdotenv 파싱 규칙입니다.

---

## 5. 프로덕션 배포

### 5-1. 서버에 코드 배치 + 의존성 설치

```bash
# 예: /var/www/aivance 에 배포
git clone <repo-url> /var/www/aivance
cd /var/www/aivance/source

composer install --no-dev --optimize-autoloader
cp .env.example .env      # 이후 .env 에 실제 SMTP_PASS 입력
chmod 640 .env            # 소유자/그룹만 읽기
```

문서 루트는 반드시 **`/var/www/aivance/source`** 로 지정합니다.

### 5-2. Nginx + PHP-FPM 예시

```nginx
server {
    listen 443 ssl http2;
    server_name aivance.kr www.aivance.kr;

    root /var/www/aivance/source;
    index index.html;

    # SSL 인증서 (Let's Encrypt 등)
    ssl_certificate     /etc/letsencrypt/live/aivance.kr/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/aivance.kr/privkey.pem;

    # 민감 파일 접근 차단 (.env, .gitignore, composer.*, vendor, 소스)
    location ~ /\.(?!well-known) { deny all; }
    location ~* /(composer\.(json|lock))$ { deny all; }
    location ^~ /vendor/ { deny all; }

    # PHP 처리 (contact.php)
    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }

    # 정적 파일
    location / { try_files $uri $uri/ =404; }
}

# HTTP → HTTPS 리다이렉트
server {
    listen 80;
    server_name aivance.kr www.aivance.kr;
    return 301 https://$host$request_uri;
}
```

### 5-3. Apache 예시

`source/` 에 `.htaccess` 를 두어 민감 파일을 차단합니다(문서 루트가 `source/` 인 경우):

```apache
# source/.htaccess
<FilesMatch "^\.env|composer\.(json|lock)$">
    Require all denied
</FilesMatch>
RedirectMatch 403 ^/vendor/
```

VirtualHost 의 `DocumentRoot` 를 `/var/www/aivance/source` 로 설정하고, PHP-FPM(mod_proxy_fcgi) 또는 mod_php 로 PHP를 처리합니다. HTTPS는 `mod_ssl` + Let's Encrypt 권장.

---

## 6. 보안 체크리스트

- [ ] `.env` 가 웹으로 노출되지 않는지 확인 → `https://도메인/.env` 접속 시 **403/404** 여야 함
- [ ] `vendor/`, `composer.json`, `composer.lock` 웹 접근 차단
- [ ] HTTPS 적용 (문의 폼은 개인정보를 전송)
- [ ] `ALLOWED_ORIGIN` 을 실제 도메인으로 고정 (`*` 지양)
- [ ] `SMTP_PASS` 는 앱 비밀번호 사용, `.env` 파일 권한 `640` 이하
- [ ] PHP 프로덕션 설정: `display_errors = Off` (contact.php 는 자체적으로 예외를 JSON 500 으로 처리하나 서버 차원에서도 비활성 권장)

문의 폼 자체 보안(구현 완료): CSRF 토큰(세션), 허니팟 봇 차단, 입력 검증·이스케이프, 30초 요청 제한.

---

## 7. 배포 후 동작 확인

```bash
# CSRF 토큰 발급 (200 + JSON)
curl -s "https://aivance.kr/contact.php?action=token"

# 민감 파일 차단 확인 (403/404 여야 정상)
curl -s -o /dev/null -w "%{http_code}\n" "https://aivance.kr/.env"

# PDF 다운로드 확인 (200 · application/pdf)
curl -sI "https://aivance.kr/downloads/AIvance_회사소개서.pdf" | grep -i "HTTP\|content-type"
```

이후 실제 브라우저에서 문의 폼을 제출해 **advisor@aivance.kr** 수신함에 `[AIvance 문의] …` 제목의 메일이 도착하는지 확인합니다.

---

## 8. 참고

- 디자인 시스템 원본·토큰·컴포넌트: `AIvance Design System/` (홈페이지는 이 토큰을 계승한 자체 완결형 스타일 `source/css/styles.css` 사용)
- 문의 담당자: 변종원 · 010-5040-0011 · advisor@aivance.kr
