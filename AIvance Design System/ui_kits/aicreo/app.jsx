const { useState } = React;
const NS = window.AIvanceDesignSystem_2cbb92;
const { Button, Badge, Tag, Card, Input, Alert } = NS;
const Mark = ({c='var(--creo-500)',a='var(--creo-600)',s=26}) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none"><path d="M14 46 L30 30 L44 40 L58 20" stroke={c} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/><circle cx="14" cy="46" r="6" fill={c}/><circle cx="30" cy="30" r="6" fill={c}/><circle cx="44" cy="40" r="6" fill={a}/><circle cx="58" cy="20" r="6" fill={a}/></svg>
);

const SERVICES = [
  { icon:'window-stack', title:'동적 페이지 · CMS', desc:'슬러그 기반 자동 라우팅과 위지윅 에디터로 콘텐츠를 직접 관리합니다.' },
  { icon:'chat-square-text', title:'게시판 · 문의', desc:'다중 게시판, 비회원 게시, 파일 첨부, 문의 자동 이메일 발송.' },
  { icon:'palette', title:'테마 시스템', desc:'ZIP 업로드로 테마 설치, 클릭 한 번으로 디자인 전환.' },
  { icon:'search', title:'SEO 자동화', desc:'OG 태그·메타 설명·GA·네이버 웹마스터 자동 삽입.' },
];
const NOTICES = [
  { tag:'공지', title:'AICreo 2.0 — 테마 마켓플레이스 오픈', date:'2026.06.28' },
  { tag:'업데이트', title:'좌측 배너 사이드바 레이아웃(spring) 추가', date:'2026.06.14' },
  { tag:'가이드', title:'신규 클라이언트 3일 납품 워크플로우', date:'2026.06.09' },
];

function Nav(){
  return (
    <nav style={{borderBottom:'1px solid var(--border-subtle)',position:'sticky',top:0,background:'rgba(255,255,255,.9)',backdropFilter:'blur(8px)',zIndex:50}}>
      <div className="wrap" style={{display:'flex',alignItems:'center',height:64,gap:28}}>
        <span style={{display:'flex',alignItems:'center',gap:9,fontFamily:'var(--font-display)',fontWeight:700,fontSize:22,letterSpacing:'-.02em',color:'var(--text-strong)'}}><Mark/><span><span style={{color:'var(--creo-500)'}}>AI</span>Creo</span></span>
        <div style={{display:'flex',gap:22,fontSize:14,fontWeight:500}}>
          <a>회사소개</a><a>서비스</a><a>포트폴리오</a><a>공지사항</a>
        </div>
        <div style={{marginLeft:'auto',display:'flex',gap:10,alignItems:'center'}}>
          <a style={{fontSize:13,fontWeight:600,color:'var(--creo-600)'}}><i className="bi bi-telephone"/> 1600-0000</a>
          <Button size="sm" accent="creo" iconRight="arrow-right">문의하기</Button>
        </div>
      </div>
    </nav>
  );
}

function Hero(){
  return (
    <header style={{position:'relative',overflow:'hidden',background:'linear-gradient(120deg,#fff 0%,#fef0f5 100%)'}}>
      <div className="wrap" style={{padding:'84px 24px 76px',textAlign:'center'}}>
        <Badge tone="creo" variant="soft" icon="lightning-charge">3~5일 빠른 납품</Badge>
        <h1 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-display)',fontWeight:700,letterSpacing:'-.03em',color:'var(--text-strong)',margin:'18px 0 16px',lineHeight:1.1}}>
          기업 홈페이지,<br/>코어는 재사용하고 디자인만 교체
        </h1>
        <p style={{fontSize:'var(--fs-lg)',color:'var(--text-muted)',maxWidth:520,margin:'0 auto 28px'}}>
          검증된 CodeIgniter 4 코어 위에 테마만 갈아끼워 단순 홈페이지는 3~5일, 중형 사이트는 1~2주 안에 납품합니다.
        </p>
        <div style={{display:'flex',gap:12,justifyContent:'center'}}>
          <Button accent="creo" size="lg" iconRight="arrow-right">데모 사이트 보기</Button>
          <Button variant="outline" size="lg" accent="creo">테마 둘러보기</Button>
        </div>
        <div style={{display:'flex',gap:32,justifyContent:'center',marginTop:44}}>
          {[['150+','납품 사이트'],['3일','평균 납품'],['MIT','오픈소스 코어']].map(([n,l])=>(
            <div key={l}><div style={{fontFamily:'var(--font-display)',fontSize:28,fontWeight:700,color:'var(--text-strong)'}}>{n}</div><div style={{fontSize:13,color:'var(--text-muted)'}}>{l}</div></div>
          ))}
        </div>
      </div>
    </header>
  );
}

function Services(){
  return (
    <section style={{padding:'72px 0',background:'var(--surface-page)'}}>
      <div className="wrap">
        <div style={{textAlign:'center',marginBottom:44}}>
          <div style={{fontSize:12,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--creo-500)',fontWeight:700}}>What we build</div>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h2)',fontWeight:700,color:'var(--text-strong)',margin:'8px 0 0'}}>납품에 필요한 모든 기능</h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:18}}>
          {SERVICES.map(s=>(
            <Card key={s.title} interactive>
              <div style={{width:44,height:44,borderRadius:'var(--radius-md)',background:'var(--creo-50)',color:'var(--creo-600)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,marginBottom:14}}>
                <i className={`bi bi-${s.icon}`}/>
              </div>
              <div style={{fontWeight:700,color:'var(--text-strong)',marginBottom:6}}>{s.title}</div>
              <div style={{fontSize:13.5,color:'var(--text-muted)',lineHeight:1.6}}>{s.desc}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Notice(){
  return (
    <section style={{padding:'64px 0'}}>
      <div className="wrap" style={{display:'flex',gap:48,alignItems:'flex-start'}}>
        <div style={{flex:'0 0 240px'}}>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h3)',fontWeight:700,color:'var(--text-strong)',margin:0}}>공지사항</h2>
          <p style={{fontSize:14,color:'var(--text-muted)',marginTop:8}}>제품 업데이트와 납품 소식을 전합니다.</p>
          <a style={{fontSize:13,fontWeight:600,color:'var(--creo-600)',cursor:'pointer'}}>전체보기 <i className="bi bi-chevron-right"/></a>
        </div>
        <div style={{flex:1,borderTop:'1px solid var(--border-subtle)'}}>
          {NOTICES.map(n=>(
            <div key={n.title} style={{display:'flex',alignItems:'center',gap:16,padding:'18px 4px',borderBottom:'1px solid var(--border-subtle)',cursor:'pointer'}}>
              <Badge tone={n.tag==='공지'?'creo':'neutral'} variant="soft">{n.tag}</Badge>
              <span style={{flex:1,fontWeight:600,color:'var(--text-strong)'}}>{n.title}</span>
              <span style={{fontSize:13,color:'var(--text-subtle)'}}>{n.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA(){
  const [sent,setSent] = useState(false);
  return (
    <section style={{padding:'0 0 80px'}}>
      <div className="wrap">
        <div style={{background:'var(--ink)',borderRadius:'var(--radius-xl)',padding:'52px 48px',display:'flex',gap:48,alignItems:'center',color:'#fff'}}>
          <div style={{flex:1}}>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h2)',fontWeight:700,margin:'0 0 12px'}}>홈페이지가 필요하신가요?</h2>
            <p style={{color:'var(--slate-400)',fontSize:15,margin:0,lineHeight:1.6}}>연락처를 남겨주시면 영업일 기준 1일 내 견적과 데모를 보내드립니다.</p>
          </div>
          <div style={{flex:'0 0 340px'}}>
            {sent
              ? <Alert tone="success" title="접수 완료">담당자가 곧 연락드리겠습니다.</Alert>
              : <div style={{display:'grid',gap:10}}>
                  <Input placeholder="회사명 / 담당자" icon="building"/>
                  <Input placeholder="연락처" icon="telephone"/>
                  <Button accent="creo" size="lg" block onClick={()=>setSent(true)}>무료 견적 받기</Button>
                </div>}
          </div>
        </div>
      </div>
    </section>
  );
}

function App(){
  return (
    <div>
      <Nav/><Hero/><Services/><Notice/><CTA/>
      <footer style={{background:'var(--surface-page)',borderTop:'1px solid var(--border-subtle)'}}>
        <div className="wrap" style={{padding:'28px 24px',display:'flex',justifyContent:'space-between',fontSize:13,color:'var(--text-muted)'}}>
          <span style={{display:'flex',alignItems:'center',gap:8}}><Mark s={18}/><span><b style={{fontFamily:'var(--font-display)',color:'var(--text-strong)'}}><span style={{color:'var(--creo-500)'}}>AI</span>Creo</b> · AIvance 제품군</span></span>
          <span>© 2026 AIvance. CodeIgniter 4 · Bootstrap 5</span>
        </div>
      </footer>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
