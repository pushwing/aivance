const { useState } = React;
const NS = window.AIvanceDesignSystem_2cbb92;
const { Button, IconButton, Badge, Tag, Card, StatCard, Alert, Select } = NS;
const Mark = ({c='var(--cura-500)',a='#fff',s=26}) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none"><path d="M14 46 L30 30 L44 40 L58 20" stroke={c} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/><circle cx="14" cy="46" r="6" fill={c}/><circle cx="30" cy="30" r="6" fill={c}/><circle cx="44" cy="40" r="6" fill={a}/><circle cx="58" cy="20" r="6" fill={a}/></svg>
);

const NAV = [
  ['speedometer2','대시보드',true],['file-earmark-text','AI 리포트'],['building','병원 관리'],
  ['bar-chart','캠페인'],['people','앱 로그'],['phone','앱 (iOS·Android)'],['gear','설정'],
];
const HOSPITALS = [
  { name:'서울라인 성형외과', spend:82, budget:100, status:'정상' },
  { name:'뷰티풀 의원', spend:94, budget:100, status:'소진임박' },
  { name:'그레이스 피부과', spend:41, budget:100, status:'정상' },
  { name:'미소 성형외과', spend:100, budget:100, status:'소진완료' },
];
const BARS = [42,55,48,63,71,66,84];
const DAYS = ['월','화','수','목','금','토','일'];

function Sidebar(){
  return (
    <aside style={{width:230,flex:'none',background:'var(--ink)',color:'#fff',display:'flex',flexDirection:'column',padding:'20px 14px'}}>
      <div style={{display:'flex',alignItems:'center',gap:9,fontFamily:'var(--font-display)',fontWeight:700,fontSize:22,letterSpacing:'-.02em',padding:'4px 10px 22px'}}>
        <Mark/><span><span style={{color:'var(--cura-500)'}}>AI</span>Cura</span>
      </div>
      <nav style={{display:'flex',flexDirection:'column',gap:2}}>
        {NAV.map(([ic,label,active])=>(
          <a key={label} style={{display:'flex',alignItems:'center',gap:11,padding:'10px 12px',borderRadius:'var(--radius-sm)',fontSize:14,fontWeight:active?600:500,
            background:active?'var(--cura-600)':'transparent',color:active?'#fff':'var(--slate-400)',cursor:'pointer'}}>
            <i className={`bi bi-${ic}`} style={{fontSize:16}}/>{label}
          </a>
        ))}
      </nav>
      <div style={{marginTop:'auto',padding:'12px',borderRadius:'var(--radius-md)',background:'rgba(255,255,255,.06)',fontSize:12,color:'var(--slate-400)'}}>
        <div style={{color:'#fff',fontWeight:600,marginBottom:2}}>운영자 스코프</div>
        전체 병원 합산 리포트
      </div>
    </aside>
  );
}

function Topbar(){
  return (
    <div style={{height:60,background:'#fff',borderBottom:'1px solid var(--border-subtle)',display:'flex',alignItems:'center',padding:'0 26px',gap:14}}>
      <div>
        <div style={{fontWeight:700,fontSize:16,color:'var(--text-strong)'}}>대시보드</div>
        <div style={{fontSize:12,color:'var(--text-subtle)'}}>2026년 7월 3일 · AI 일일 리포트 자동 생성됨</div>
      </div>
      <div style={{marginLeft:'auto',display:'flex',gap:10,alignItems:'center'}}>
        <div style={{width:150}}><Select options={['운영자(전체)','광고주(내 병원)','대행사(소속 병원)']} /></div>
        <IconButton icon="bell" label="알림"/>
        <div style={{width:34,height:34,borderRadius:'999px',background:'var(--cura-500)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:13}}>운</div>
      </div>
    </div>
  );
}

function Chart(){
  const max = Math.max(...BARS);
  return (
    <Card padding="md">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:18}}>
        <div style={{fontWeight:700,color:'var(--text-strong)'}}>주간 매출 추이</div>
        <Badge tone="success" variant="soft" icon="arrow-up-right">+18%</Badge>
      </div>
      <div style={{display:'flex',alignItems:'flex-end',gap:14,height:150}}>
        {BARS.map((v,i)=>(
          <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
            <div style={{width:'100%',height:`${v/max*130}px`,borderRadius:'6px 6px 0 0',background:i===BARS.length-1?'var(--cura-500)':'var(--cura-50)',border:i===BARS.length-1?'none':'1px solid var(--cura-500)',transition:'height .4s'}}/>
            <span style={{fontSize:12,color:'var(--text-subtle)'}}>{DAYS[i]}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Hospitals(){
  const tone = {정상:'success','소진임박':'warning','소진완료':'danger'};
  return (
    <Card padding="none">
      <div style={{padding:'16px 18px',borderBottom:'1px solid var(--border-subtle)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{fontWeight:700,color:'var(--text-strong)'}}>병원별 광고비 소진</div>
        <a style={{fontSize:13,color:'var(--cura-600)',cursor:'pointer'}}>전체보기</a>
      </div>
      <div style={{padding:'6px 0'}}>
        {HOSPITALS.map(h=>(
          <div key={h.name} style={{display:'flex',alignItems:'center',gap:14,padding:'12px 18px'}}>
            <div style={{flex:1}}>
              <div style={{fontSize:14,fontWeight:600,color:'var(--text-strong)',marginBottom:6}}>{h.name}</div>
              <div style={{height:6,background:'var(--slate-100)',borderRadius:'999px',overflow:'hidden'}}>
                <div style={{width:`${h.spend}%`,height:'100%',background:h.spend>=100?'var(--danger-500)':h.spend>=90?'var(--warning-500)':'var(--cura-500)'}}/>
              </div>
            </div>
            <span style={{fontFamily:'var(--font-mono)',fontSize:13,color:'var(--text-muted)',width:44,textAlign:'right'}}>{h.spend}%</span>
            <div style={{width:78,textAlign:'right'}}><Badge tone={tone[h.status]} variant="soft">{h.status}</Badge></div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Report(){
  return (
    <Card accent="cura" padding="md">
      <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12}}>
        <div style={{width:30,height:30,borderRadius:'var(--radius-sm)',background:'var(--cura-50)',color:'var(--cura-600)',display:'flex',alignItems:'center',justifyContent:'center'}}><i className="bi bi-stars"/></div>
        <div style={{fontWeight:700,color:'var(--text-strong)'}}>AI 일일 리포트</div>
        <Badge tone="cura" variant="soft" style={{marginLeft:'auto'}}>Groq</Badge>
      </div>
      <p style={{fontSize:14,lineHeight:1.75,color:'var(--text-body)',margin:'0 0 12px'}}>
        오늘 전체 매출은 <b style={{color:'var(--text-strong)'}}>₩3,240만</b>으로 전일 대비 <b style={{color:'var(--success-700)'}}>18% 증가</b>했습니다.
        <b style={{color:'var(--warning-700)'}}> 뷰티풀 의원</b>의 광고비가 94% 소진되어 재충전이 필요합니다.
        상담 신청 전환율은 주말 대비 12%p 상승했습니다.
      </p>
      <div style={{display:'flex',gap:8}}>
        <Button accent="cura" size="sm" iconRight="arrow-right">전체 리포트</Button>
        <Button variant="ghost" size="sm" iconLeft="download">PDF</Button>
      </div>
    </Card>
  );
}

function App(){
  return (
    <div style={{display:'flex',minHeight:'100vh'}}>
      <Sidebar/>
      <div style={{flex:1,minWidth:0,display:'flex',flexDirection:'column'}}>
        <Topbar/>
        <div style={{padding:26,display:'flex',flexDirection:'column',gap:18}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
            <StatCard label="오늘 매출" value="₩32.4M" tone="cura" icon="graph-up-arrow" delta={18}/>
            <StatCard label="상담 신청" value={156} unit="건" tone="cura" icon="chat-dots" delta={12}/>
            <StatCard label="집행 병원" value={24} unit="곳" tone="brand" icon="building"/>
            <StatCard label="소진 임박" value={3} unit="곳" tone="warning" icon="exclamation-triangle" delta={-2}/>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1.6fr 1fr',gap:18,alignItems:'start'}}>
            <Chart/>
            <Report/>
          </div>
          <Hospitals/>
        </div>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
