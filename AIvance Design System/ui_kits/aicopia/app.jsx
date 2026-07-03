const { useState } = React;
const NS = window.AIvanceDesignSystem_2cbb92;
const { Button, IconButton, Badge, Tag, ProductCard, PriceTag, Input, Alert } = NS;

const img = (s) => `https://images.unsplash.com/${s}?w=600&h=600&fit=crop`;
const Mark = ({c='var(--copia-500)',a='var(--copia-600)',s=26}) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none"><path d="M14 46 L30 30 L44 40 L58 20" stroke={c} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/><circle cx="14" cy="46" r="6" fill={c}/><circle cx="30" cy="30" r="6" fill={c}/><circle cx="44" cy="40" r="6" fill={a}/><circle cx="58" cy="20" r="6" fill={a}/></svg>
);
const PRODUCTS = [
  { id:1, name:'베이직 코튼 티셔츠', category:'상의', price:29000, discountPrice:19900, badge:'NEW', image:img('photo-1521572163474-6864f9cf17ab') },
  { id:2, name:'오버핏 데님 자켓', category:'아우터', price:89000, image:img('photo-1544022613-e87ca75a784a') },
  { id:3, name:'소프트 니트 가디건', category:'상의', price:54000, discountPrice:43200, image:img('photo-1434389677669-e08b4cac3105') },
  { id:4, name:'클래식 치노 팬츠', category:'하의', price:49000, discountPrice:34300, badge:'PICK', image:img('photo-1473966968600-fa801b869a1a') },
  { id:5, name:'캔버스 스니커즈', category:'신발', price:69000, soldOut:true, image:img('photo-1460353581641-37baddab0fa2') },
  { id:6, name:'미니멀 크로스백', category:'가방', price:79000, discountPrice:55300, image:img('photo-1548036328-c9fa89d128fa') },
  { id:7, name:'울 블렌드 코트', category:'아우터', price:159000, badge:'NEW', image:img('photo-1539533018447-63fcce2678e3') },
  { id:8, name:'라운드넥 스웨트셔츠', category:'상의', price:39000, discountPrice:31200, image:img('photo-1556821840-3a63f95609a7') },
];
const CATS = ['전체','아우터','상의','하의','신발','가방'];

function Navbar({ cartCount, onCart, onHome }) {
  return (
    <nav style={{background:'#fff',borderBottom:'1px solid var(--border-subtle)',position:'sticky',top:0,zIndex:50}}>
      <div className="wrap" style={{display:'flex',alignItems:'center',height:64,gap:24}}>
        <a onClick={onHome} style={{cursor:'pointer',display:'flex',alignItems:'center',gap:9,fontFamily:'var(--font-display)',fontWeight:700,fontSize:22,letterSpacing:'-.02em',color:'var(--text-strong)'}}>
          <Mark/><span><span style={{color:'var(--copia-500)'}}>AI</span>Copia</span>
        </a>
        <div style={{display:'flex',gap:20,fontSize:14,fontWeight:500,marginLeft:8}}>
          <a onClick={onHome} style={{cursor:'pointer'}}>전체상품</a>
          <a style={{cursor:'pointer'}}>기획전</a>
          <a style={{cursor:'pointer'}}>공지사항</a>
        </div>
        <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:10}}>
          <div style={{position:'relative',width:210,display:'none'}}></div>
          <IconButton icon="search" label="검색" />
          <div style={{position:'relative'}}>
            <IconButton icon="cart2" label="장바구니" onClick={onCart} accent="copia" variant="outline" />
            {cartCount>0 && <span style={{position:'absolute',top:-5,right:-5,background:'var(--danger-500)',color:'#fff',fontSize:10,fontWeight:700,minWidth:17,height:17,borderRadius:'999px',display:'flex',alignItems:'center',justifyContent:'center',padding:'0 4px'}}>{cartCount}</span>}
          </div>
          <Button size="sm" variant="ghost" iconLeft="person">로그인</Button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div style={{background:'linear-gradient(135deg,#4c1d95 0%,#6d28d9 55%,#7c3aed 100%)',color:'#fff'}}>
      <div className="wrap" style={{padding:'56px 24px',display:'flex',alignItems:'center',gap:40}}>
        <div style={{flex:1}}>
          <Badge tone="copia" variant="soft" icon="stars">AI 개인화 추천</Badge>
          <h1 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h1)',fontWeight:700,letterSpacing:'-.02em',margin:'16px 0 10px',lineHeight:1.15}}>
            취향을 아는 쇼핑,<br/>운영은 AI가 대신합니다
          </h1>
          <p style={{fontSize:'var(--fs-lg)',color:'rgba(255,255,255,.82)',margin:'0 0 22px',maxWidth:440}}>
            상품 등록부터 문의 응대까지 — 반복 업무는 AICopia가 처리합니다.
          </p>
          <div style={{display:'flex',gap:10}}>
            <Button variant="dark" iconRight="arrow-right" style={{background:'#fff',color:'var(--copia-600)',borderColor:'#fff'}}>쇼핑 시작하기</Button>
            <Button variant="outline" style={{color:'#fff',borderColor:'rgba(255,255,255,.5)'}}>기획전 보기</Button>
          </div>
        </div>
        <div style={{flex:'0 0 300px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          {PRODUCTS.slice(0,4).map(p=>(
            <div key={p.id} style={{aspectRatio:'1',borderRadius:'var(--radius-md)',overflow:'hidden',boxShadow:'var(--shadow-lg)'}}>
              <img src={p.image} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Section({ tag, tagTone, title, items, onOpen }) {
  return (
    <section style={{padding:'44px 0'}}>
      <div className="wrap">
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:22}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <Badge tone={tagTone}>{tag}</Badge>
            <span style={{fontSize:'var(--fs-h4)',fontWeight:700,color:'var(--text-strong)'}}>{title}</span>
          </div>
          <a style={{cursor:'pointer',fontSize:13,color:'var(--text-muted)'}}>전체보기 <i className="bi bi-chevron-right"/></a>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
          {items.map(p=>(
            <div key={p.id} onClick={()=>!p.soldOut&&onOpen(p)} style={{cursor:p.soldOut?'default':'pointer'}}>
              <ProductCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home({ onOpen }) {
  const [cat,setCat] = useState('전체');
  const list = cat==='전체'?PRODUCTS:PRODUCTS.filter(p=>p.category===cat);
  return (
    <div>
      <Hero/>
      <div style={{background:'#fff',borderBottom:'1px solid var(--border-subtle)'}}>
        <div className="wrap" style={{display:'flex',gap:8,padding:'16px 24px',flexWrap:'wrap',justifyContent:'center'}}>
          {CATS.map(c=><Tag key={c} as="button" accent="copia" active={c===cat} onClick={()=>setCat(c)}>{c}</Tag>)}
        </div>
      </div>
      <Section tag="PICK" tagTone="danger" title="기획전 추천" items={list.slice(0,4)} onOpen={onOpen}/>
      <div style={{background:'#fff'}}>
        <Section tag="NEW" tagTone="ink" title="신상품" items={list.slice(0,4)} onOpen={onOpen}/>
      </div>
      <Section tag="SALE" tagTone="danger" title="할인 상품" items={list.filter(p=>p.discountPrice).slice(0,4)} onOpen={onOpen}/>
    </div>
  );
}

function Detail({ p, onBack, onAdd }) {
  const [qty,setQty] = useState(1);
  const [added,setAdded] = useState(false);
  return (
    <div className="wrap" style={{padding:'28px 24px'}}>
      <a onClick={onBack} style={{cursor:'pointer',fontSize:13,color:'var(--text-muted)'}}><i className="bi bi-chevron-left"/> 목록으로</a>
      <div style={{display:'flex',gap:40,marginTop:18,alignItems:'flex-start'}}>
        <div style={{flex:'0 0 460px',aspectRatio:'1',borderRadius:'var(--radius-lg)',overflow:'hidden',background:'#fff',boxShadow:'var(--shadow-card)'}}>
          <img src={p.image} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </div>
        <div style={{flex:1,paddingTop:6}}>
          <div style={{display:'flex',gap:6,marginBottom:12}}>
            <Badge tone="copia" variant="soft">{p.category}</Badge>
            {p.badge && <Badge tone="ink">{p.badge}</Badge>}
          </div>
          <h1 style={{fontSize:'var(--fs-h2)',fontWeight:700,color:'var(--text-strong)',margin:'0 0 14px',letterSpacing:'-.01em'}}>{p.name}</h1>
          <PriceTag price={p.price} discountPrice={p.discountPrice} showRate size="lg"/>
          <div style={{borderTop:'1px solid var(--border-subtle)',margin:'22px 0',paddingTop:20,display:'grid',gap:12,fontSize:14}}>
            <Row k="배송" v="무료배송 · 1~2일 내 출고"/>
            <Row k="적립" v="구매 시 1% 포인트 적립"/>
            <Row k="재고" v={<span style={{color:'var(--success-700)'}}>재고 있음</span>}/>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:16}}>
            <span style={{fontSize:14,fontWeight:600,color:'var(--text-body)'}}>수량</span>
            <div style={{display:'flex',alignItems:'center',border:'1px solid var(--border-default)',borderRadius:'var(--radius-sm)'}}>
              <IconButton icon="dash" variant="ghost" size="sm" label="감소" onClick={()=>setQty(q=>Math.max(1,q-1))}/>
              <span style={{width:38,textAlign:'center',fontWeight:600}}>{qty}</span>
              <IconButton icon="plus" variant="ghost" size="sm" label="증가" onClick={()=>setQty(q=>q+1)}/>
            </div>
          </div>
          {added && <div style={{marginBottom:14}}><Alert tone="success">장바구니에 담았습니다.</Alert></div>}
          <div style={{display:'flex',gap:10}}>
            <Button accent="copia" size="lg" block iconLeft="cart-plus" onClick={()=>{onAdd(qty);setAdded(true);}}>장바구니 담기</Button>
            <IconButton icon="heart" size="lg" variant="outline" accent="creo" label="찜"/>
          </div>
        </div>
      </div>
    </div>
  );
}
const Row = ({k,v}) => <div style={{display:'flex',gap:16}}><span style={{width:60,color:'var(--text-muted)'}}>{k}</span><span style={{color:'var(--text-body)'}}>{v}</span></div>;

function CartDrawer({ open, items, onClose }) {
  const total = items.reduce((s,i)=>s+(i.discountPrice||i.price)*i.qty,0);
  return (
    <>
      <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(15,23,42,.4)',opacity:open?1:0,pointerEvents:open?'auto':'none',transition:'opacity .2s',zIndex:60}}/>
      <aside style={{position:'fixed',top:0,right:0,bottom:0,width:380,background:'#fff',boxShadow:'var(--shadow-xl)',transform:`translateX(${open?0:100}%)`,transition:'transform .28s cubic-bezier(.16,1,.3,1)',zIndex:70,display:'flex',flexDirection:'column'}}>
        <div style={{padding:'18px 20px',borderBottom:'1px solid var(--border-subtle)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <span style={{fontWeight:700,fontSize:16,color:'var(--text-strong)'}}>장바구니 <span style={{color:'var(--copia-500)'}}>{items.length}</span></span>
          <IconButton icon="x-lg" variant="ghost" label="닫기" onClick={onClose}/>
        </div>
        <div style={{flex:1,overflow:'auto',padding:16,display:'flex',flexDirection:'column',gap:12}}>
          {items.length===0 && <div style={{textAlign:'center',color:'var(--text-subtle)',padding:'48px 0'}}><i className="bi bi-cart-x" style={{fontSize:32}}/><div style={{marginTop:8,fontSize:14}}>장바구니가 비어 있습니다</div></div>}
          {items.map((i,idx)=>(
            <div key={idx} style={{display:'flex',gap:12,alignItems:'center'}}>
              <img src={i.image} style={{width:64,height:64,borderRadius:'var(--radius-sm)',objectFit:'cover'}}/>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:13,fontWeight:600,color:'var(--text-strong)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{i.name}</div>
                <div style={{fontSize:12,color:'var(--text-muted)'}}>수량 {i.qty}</div>
                <PriceTag price={(i.discountPrice||i.price)*i.qty} size="sm"/>
              </div>
            </div>
          ))}
        </div>
        <div style={{padding:20,borderTop:'1px solid var(--border-subtle)'}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:14,fontWeight:700}}>
            <span style={{color:'var(--text-body)'}}>결제 예상금액</span>
            <PriceTag price={total} size="md"/>
          </div>
          <Button accent="copia" size="lg" block disabled={items.length===0}>주문하기</Button>
        </div>
      </aside>
    </>
  );
}

function App() {
  const [view,setView] = useState({name:'home'});
  const [cart,setCart] = useState([]);
  const [drawer,setDrawer] = useState(false);
  const addToCart = (p,qty)=>setCart(c=>[...c,{...p,qty}]);
  return (
    <div>
      <Navbar cartCount={cart.length} onCart={()=>setDrawer(true)} onHome={()=>setView({name:'home'})}/>
      {view.name==='home'
        ? <Home onOpen={(p)=>{setView({name:'detail',p});window.scrollTo(0,0);}}/>
        : <Detail p={view.p} onBack={()=>setView({name:'home'})} onAdd={(qty)=>addToCart(view.p,qty)}/>}
      <footer style={{background:'var(--ink)',color:'#fff',marginTop:20}}>
        <div className="wrap" style={{padding:'32px 24px',display:'flex',justifyContent:'space-between',fontSize:13,color:'var(--slate-400)'}}>
          <div style={{display:'flex',alignItems:'center',gap:8}}><Mark c="#fff" a="#fff" s={20}/><span><span style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#fff'}}><span style={{color:'var(--copia-500)'}}>AI</span>Copia</span> — AI 커머스 솔루션</span></div>
          <div>© 2026 AIvance. All rights reserved.</div>
        </div>
      </footer>
      <CartDrawer open={drawer} items={cart} onClose={()=>setDrawer(false)}/>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
