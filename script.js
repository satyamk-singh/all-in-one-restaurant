var WA='91XXXXXXXXXX',PHONE='91XXXXXXXXXX'; // put Satyam Singh's number here (country code first, digits only)
var IM={para:"images/para.jpg",kul:"images/kul.jpg",pizza:"images/pizza.jpg",tikka:"images/tikka.jpg",tand:"images/tand.jpg",rasm:"images/rasm.jpg",jal:"images/jal.jpg",box:"images/box.jpg"};
var M=[
["Happy de Paper Parathe","para","Served with makhan, raita and achar",[["Aloo Paratha",120,1],["Paneer Paratha",140,1],["Chicken Keema Paratha",170,0],["Mooli Paratha",120,1]]],
["Kulche Choley","kul","Served with pindi chana",[["Aloo Kulcha",130,1],["Paneer Kulcha",150,1],["Mix Veg Kulcha",140,1],["Chicken Keema Kulcha",180,0],["Bheega Kulcha",160,1],["Matar Kulcha",110,1],["Pocket Kulcha Chole",120,1],["Pocket Kulcha Chicken Keema",160,0]]],
["Pizza 8 inch","pizza","Desi flavours on a crisp base",[["Just Cheese Pizza",160,1],["Chicken Keema Pizza",200,0],["Hari Chutney Paneer Pizza",190,1],["Hari Chutney Chicken Pizza",210,0],["Desi Style Veggie Pizza",180,1]]],
["Sandwiches &amp; Burgers","🥪","Grilled hot and crunchy",[["Happy Burger (Veg)",90,1,"🍔"],["Grilled Maggi Sandwich",90,1],["Grilled Bombay Sandwich",90,1],["Double Grilled Cheese Sandwich",110,1]]],
["Tikke Shikke","tikka","From the clay oven, with mint chutney",[["Malai Soya Chaap",200,1],["Paneer Tikka",220,1],["Chicken Tikka",240,0],["Tandoori Leg",150,0,"tand"]]],
["Desserts","jal","Warm, sweet and desi",[["Gulab Jamun",40,1,"🍩"],["Moong Dal Halwa",60,1,"🥣"],["Jalebi",50,1],["Malpua",60,1,"🥞"],["Rasmalai",60,1,"rasm"],["Badam Kheer",60,1,"rasm"],["Mango Phirni",60,1,"rasm"],["Gajar Halwa",70,1,"🥕"],["Jalebi with Rabri",90,1],["Malpua with Rabri",90,1,"🥞"]]],
["Kids Menu","box","Little portions in a fun My Box",[["Grilled Cheese",80,1,"🧀"],["Chota Dynamite Burger (Chicken)",90,0,"🍔"],["Chota Maggi",70,1,"🍜"],["Chicken Nuggets",80,0,"🍗"],["Smiley Fries",70,1,"🍟"],["My Box Combo (burger or maggi, fries, drink)",149,1]]],
["Starters &amp; Chaat","🥟","Quick bites and street favourites",[["Veg Momos",80,1,"🥟"],["Chicken Momos",100,0,"🥟"],["Paneer Chilli",180,1,"🌶️"],["Crispy Corn",120,1,"🌽"],["Pav Bhaji",110,1,"🍲"]]],
["Main Course &amp; Rice","🍛","Rich gravies and fragrant rice",[["Dal Makhani",180,1,"🍲"],["Shahi Paneer",220,1,"🍛"],["Butter Chicken",280,0,"🍗"],["Chicken Curry",240,0,"🍛"],["Veg Biryani",160,1,"🍚"],["Chicken Biryani",220,0,"🍚"]]],
["Breads","🫓","Fresh from the tandoor",[["Butter Naan",40,1,"🫓"],["Garlic Naan",50,1,"🫓"],["Tandoori Roti",15,1,"🫓"]]],
["Beverages","🥤","Chai, shakes and coolers",[["Masala Chai",20,1,"☕"],["Cold Coffee",80,1,"🥤"],["Sweet Lassi",60,1,"🥛"],["Mango Shake",90,1,"🥭"],["Fresh Lime Soda",50,1,"🍋"]]]];
var $=function(s){return document.querySelector(s)},cart={},vegOnly=false,qs='';
try{cart=JSON.parse(localStorage.getItem('a1cart')||'{}')}catch(e){}
function save(){try{localStorage.setItem('a1cart',JSON.stringify(cart))}catch(e){}$('#cc').textContent=Object.keys(cart).reduce(function(a,k){return a+cart[k]},0)}
function toast(t){var e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(function(){e.classList.remove('on')},1800)}
function it(id){var p=id.split('.');return M[p[0]][3][p[1]]}
function pic(k,cls){return IM[k]?'<img class="food" data-b="'+k+'" src="'+IM[k]+'" alt="">':'<span class="emo" data-b="">'+k+'</span>'}
/* 3D blast */
function blast(el,k){var r=el.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2,src=IM[k];
 for(var i=0;i<22;i++){var d=document.createElement('i'),s=14+Math.random()*28;d.className='frag';
 d.style.cssText='left:'+x+'px;top:'+y+'px;width:'+s+'px;height:'+s+'px;'+(src?'background:url('+src+') '+Math.random()*100+'% '+Math.random()*100+'%/'+(300+Math.random()*300)+'%':'background:var(--gold)');
 document.body.appendChild(d);var a=Math.random()*6.28,q=90+Math.random()*200;
 d.animate([{transform:'perspective(500px) translate3d(0,0,0) rotate(0) scale(1)',opacity:1},{transform:'perspective(500px) translate3d('+Math.cos(a)*q+'px,'+Math.sin(a)*q+'px,'+Math.random()*280+'px) rotate('+Math.random()*720+'deg) scale(.15)',opacity:0}],{duration:800+Math.random()*600,easing:'cubic-bezier(.1,.7,.3,1)'}).onfinish=d.remove.bind(d)}
 if(el.animate)el.animate([{transform:'translateZ(60px) scale(.3) rotateY(180deg)'},{transform:'translateZ(60px) scale(1.12)'},{transform:'translateZ(60px) scale(1)'}],{duration:700,easing:'ease-out'})}
document.addEventListener('click',function(e){var b=e.target.closest('[data-b]');if(b)blast(b,b.dataset.b)});
document.addEventListener('mouseover',function(e){var b=e.target.closest('img[data-b]');if(b&&!b._h){b._h=1;blast(b,b.dataset.b);setTimeout(function(){b._h=0},2500)}});
/* tilt */
document.addEventListener('mousemove',function(e){var c=e.target.closest('.card');if(!c)return;var r=c.getBoundingClientRect();c.style.transform='rotateY('+((e.clientX-r.left)/r.width-.5)*16+'deg) rotateX('+(-((e.clientY-r.top)/r.height-.5)*16)+'deg)'});
document.addEventListener('mouseout',function(e){var c=e.target.closest('.card');if(c&&!c.contains(e.relatedTarget))c.style.transform=''});
/* menu */
var sold={},DB=null,ADMIN=false,tk={},UID='',REC={},TR={},LD={};
function relist(){listA('#aord',LD.orders||[],'orders');listA('#abk',LD.book||[],'book')}
async function put(col,id,o){var f={};f[id]=o;var r=DB.doc(col+'/'+(o.uid||UID));try{await r.update(f)}catch(x){await r.set(f)}}
function sk(d,s,i){return d+"_"+s.replace(/\W/g,"")+"_"+i}
function btn(id){return dineOnly(id)?"":sold[id]?'<em class="tag">Sold out</em>':'<button class="add" data-add="'+id+'">Add</button>'}
var DINE=['Tandoori Leg','Chicken Tikka','Jalebi','Jalebi with Rabri','Malpua with Rabri','Bheega Kulcha','Mango Phirni'],CEXC=[2,3,4,5,10];
var ZN=[['Hussainabad Market / Near SBI Bank',0,30,399,'25–35 min',0],['Hussainabad outskirts, Pandu, Nawa Bazar',1,50,499,'45–60 min',0],['Medininagar, Chhatarpur, Hariharganj',2,80,0,'60–75 min',300]];
var zone=-1,slot='',tbl=-1,disc=0,TS=[2,2,2,4,4,4,4,6,6,8,10,12],SL=['12:00 PM','1:00 PM','2:00 PM','3:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM'];
function th(k){return IM[k]?'<img class="th" data-b="'+k+'" src="'+IM[k]+'" alt="">':'<span class="th" data-b="">'+k+'</span>'}
function ik(id){var p=id.split('.');return M[p[0]][3][p[1]][3]||M[p[0]][1]}
function dineOnly(id){return DINE.indexOf(it(id)[0])>-1}
function can(id){return!dineOnly(id)&&!sold[id]&&!(zone==2&&CEXC.indexOf(+id.split('.')[0])>-1)}
function drawMenu(){var h='';M.forEach(function(c,ci){var rows=c[3].map(function(x,i){return[x,i]}).filter(function(p){return(!vegOnly||p[0][2])&&p[0][0].toLowerCase().indexOf(qs)>-1});if(!rows.length)return;
 h+='<div class="cat" id="c'+ci+'"><div class="card">'+pic(c[1])+'<h3>'+c[0]+'</h3><p>'+c[2]+'</p></div><div>'+rows.map(function(p){var id=ci+'.'+p[1],d=dineOnly(id);return'<div class="item">'+th(ik(id))+'<span class="dot'+(p[0][2]?'':' n')+'"></span><b>'+p[0][0]+(d?'<em class="tag">Dine-in only</em>':'')+'</b><span class="pr">₹'+p[0][1]+'</span>'+btn(id)+'</div>'}).join('')+'</div></div>'});
 $('#menu').innerHTML=h||'<p class="mute">No dishes match. Try another search.</p>'}
$('#chips').innerHTML=M.map(function(c,i){return'<button class="tg" data-sc="'+i+'">'+c[0].replace('Happy de Paper ','').replace(' 8 inch','')+'</button>'}).join('');
$('#q').oninput=function(){qs=this.value.toLowerCase();drawMenu()};
$('#vg').onclick=function(){vegOnly=!vegOnly;this.classList.toggle('on',vegOnly);drawMenu()};
document.addEventListener('click',function(e){var a=e.target.closest('[data-add]'),s=e.target.closest('[data-sc]'),l=e.target.closest('[data-sl]'),b=e.target.closest('[data-tb]');
 if(a){var id=a.dataset.add;if(zone>-1&&!can(id)){toast('Not deliverable to your area');return}cart[id]=(cart[id]||0)+1;save();drawCart();var c=a.closest('.item').querySelector('.th');if(c)blast(c,c.dataset.b);toast('Added '+it(id)[0]+(zone<0?' – choose your area on the Delivery page':''))}
 if(s){var t=$('#c'+s.dataset.sc);if(t)t.scrollIntoView({behavior:'smooth',block:'center'})}
 if(l){slot=l.dataset.sl;tbl=-1;drawDine()}if(b){tbl=+b.dataset.tb;drawDine()}});
$('#best').innerHTML=[['kul','Kulche Choley','From ₹110'],['pizza','8-inch Pizza','From ₹160'],['tikka','Tikke Shikke','From ₹150'],['para','Stuffed Parathe','From ₹120'],['jal','Jalebi with Rabri','₹90'],['box','Kids My Box','₹149']].map(function(b){return'<div class="card">'+pic(b[0])+'<h3 style="text-align:center">'+b[1]+'</h3><p style="text-align:center">'+b[2]+'</p></div>'}).join('');
/* dine-in */
function taken(d,s,i){if(DB)return!!tk[sk(d,s,i)];var h=0,x=d+s+i;for(var j=0;j<x.length;j++)h=(h*31+x.charCodeAt(j))%97;return h%4==0}
function drawDine(){var d=$('#td').value,g=+$('#tg').value;
 $('#slots').innerHTML=SL.map(function(s){return'<button type="button" class="tg'+(s===slot?' on':'')+'" data-sl="'+s+'">'+s+'</button>'}).join('');
 $('#thint').textContent=slot?'(greyed tables are booked or too small for '+g+' guests)':'(pick a time first)';
 $('#tables').innerHTML=TS.map(function(n,i){var off=!slot||taken(d,slot,i)||n<g;if(i===tbl&&off)tbl=-1;return'<button type="button" class="tbl'+(i===tbl?' on':'')+'" data-tb="'+i+'"'+(off?' disabled':'')+'><b>T'+(i+1)+'</b>'+n+' seats</button>'}).join('');
 var h='';M.forEach(function(c,ci){c[3].forEach(function(x,i){var id=ci+'.'+i;if(dineOnly(id))h+='<div class="item">'+th(ik(id))+'<span class="dot'+(x[2]?'':' n')+'"></span><b>'+x[0]+'</b><span class="pr">₹'+x[1]+'</span></div>'})});$('#dinelist').innerHTML=h}
var td=$('#td');td.value=td.min=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10);
$('#tg').innerHTML=[1,2,3,4,5,6,7,8,9,10,11,12].map(function(n){return'<option value="'+n+'"'+(n==2?' selected':'')+'>'+n+(n>1?' guests':' guest')+'</option>'}).join('');
$('#td').onchange=$('#tg').onchange=function(){tbl=-1;drawDine()};
$('#tf').onsubmit=async function(e){e.preventDefault();if(!slot||tbl<0){toast('Pick a time and a table');return}
 var id='B-'+Date.now().toString(36).toUpperCase().slice(-5),d=$('#td').value,key=sk(d,slot,tbl),saved=false;
 if(DB){try{var r=await DB.doc('slots/'+key).acquire({holder:id,ttlMs:2592e6});if(!r.acquired){toast('That table was just booked. Please pick another.');tbl=-1;drawDine();return}
  await put('book',id,{id:id,uid:UID,name:$('#tn').value,phone:$('#tp').value,date:d,slot:slot,guests:+$('#tg').value,table:tbl+1,seats:TS[tbl],key:key,status:'Pending',at:Date.now()});saved=true}catch(x){}}
 var m='*Table booking '+id+' – All in One Restaurant*%0AName: '+$('#tn').value+'%0APhone: '+$('#tp').value+'%0ADate: '+d+'%0ATime: '+slot+'%0AGuests: '+$('#tg').value+'%0ATable: T'+(tbl+1)+' ('+TS[tbl]+' seats)';
 if(WA.indexOf('X')<0)window.open('https://wa.me/'+WA+'?text='+m);else if(!saved)toast('Owner WhatsApp number not set yet');
 $('#bk').innerHTML='<div class="box" style="margin-top:14px;border-color:var(--green)">✅ Booking <b>'+id+'</b>: table T'+(tbl+1)+' on '+d+' at '+slot+' for '+$('#tg').value+' guests. '+(saved?'The table is now held for you; the restaurant will confirm.':'Send the WhatsApp message to confirm.')+'</div>';blast($('#tf .btn'),'')};
/* delivery */
function totals(){var s=0;for(var k in cart)s+=it(k)[1]*cart[k];var z=ZN[zone]||[0,0,0,0],d=!s?0:(z[3]&&s>=z[3]?0:z[2]),c=disc?Math.round(s*.1):0;return{s:s,d:d,c:c,t:s+d-c}}
function drawDel(){var z=ZN[zone],h='',n=0,tot=0;
 if(!z){$('#zinfo').innerHTML='<p class="mute">Choose your area to see which dishes we deliver there.</p>';$('#dmenu').innerHTML='';$('#zcount').textContent='';return}
 M.forEach(function(c,ci){var r=c[3].map(function(x,i){return ci+'.'+i}).filter(function(id){tot++;return can(id)});if(!r.length)return;n+=r.length;
  h+='<h4>'+c[0]+'</h4>'+r.map(function(id){var x=it(id);return'<div class="item">'+th(ik(id))+'<span class="dot'+(x[2]?'':' n')+'"></span><b>'+x[0]+'</b><span class="pr">₹'+x[1]+'</span><button class="add" data-add="'+id+'">Add</button></div>'}).join('')});
 $('#dmenu').innerHTML=h;$('#zcount').textContent='('+n+' of '+tot+' dishes)';
 $('#zinfo').innerHTML='<div class="chips" style="margin-top:12px"><span class="chip">⏱ '+z[4]+'</span><span class="chip">🛵 ₹'+z[2]+(z[3]?' (free above ₹'+z[3]+')':'')+'</span>'+(z[5]?'<span class="chip">Minimum order ₹'+z[5]+'</span>':'')+'<span class="chip">'+(z[1]==2?'Pizza, sandwiches, tikka, desserts and drinks are not delivered here':'Dine-in specials are not delivered')+'</span></div>'}
$('#zn').innerHTML='<option value="-1">Select your area…</option>'+ZN.map(function(z,i){return'<option value="'+i+'">'+z[0]+'</option>'}).join('');
$('#zn').onchange=function(){zone=+this.value;var r=0;Object.keys(cart).forEach(function(k){if(zone>-1&&!can(k)){delete cart[k];r++}});if(r)toast(r+' item(s) removed: not deliverable to this area');save();drawDel();drawCart()};
function drawCart(){var ks=Object.keys(cart);$('#cart').innerHTML=ks.length?ks.map(function(k){return'<div class="item"><span class="dot'+(it(k)[2]?'':' n')+'"></span><b>'+it(k)[0]+'</b><span class="qty"><button data-q="'+k+'|-1" aria-label="Less">−</button>'+cart[k]+'<button data-q="'+k+'|1" aria-label="More">+</button></span><span class="pr">₹'+it(k)[1]*cart[k]+'</span></div>'}).join(''):'<p class="mute">Your cart is empty. Add dishes from the list.</p>';
 var t=totals();$('#sum').innerHTML='<div><span>Subtotal</span><span>₹'+t.s+'</span></div><div><span>Delivery</span><span>'+(t.d?'₹'+t.d:(zone<0?'Choose area':'Free'))+'</span></div>'+(t.c?'<div><span>Coupon ALL10</span><span>−₹'+t.c+'</span></div>':'')+'<div class="tot"><span>Total</span><span>₹'+t.t+'</span></div>'}
document.addEventListener('click',function(e){var q=e.target.closest('[data-q]');if(!q)return;var p=q.dataset.q.split('|');cart[p[0]]+=+p[1];if(cart[p[0]]<1)delete cart[p[0]];save();drawCart()});
$('#cp').oninput=function(){disc=this.value.trim().toUpperCase()==='ALL10';drawCart()};
$('#of').onsubmit=async function(e){e.preventDefault();var t=totals();if(zone<0){toast('Choose your delivery area first');$('#zn').focus();return}if(!t.s){toast('Add dishes first');return}if(ZN[zone][5]&&t.s<ZN[zone][5]){toast('Minimum order here is ₹'+ZN[zone][5]);return}
 var id='O-'+Date.now().toString(36).toUpperCase().slice(-5),items='',m='*New order '+id+' – All in One Restaurant*%0A',saved=false;
 for(var k in cart){items+=cart[k]+' x '+it(k)[0]+', ';m+=cart[k]+' x '+it(k)[0]+' = ₹'+it(k)[1]*cart[k]+'%0A'}
 m+='%0ATotal: ₹'+t.t+' ('+$('#pay').value+')%0AArea: '+ZN[zone][0]+'%0AName: '+$('#nm').value+'%0APhone: '+$('#ph').value+'%0AAddress: '+$('#ad').value;
 if(DB){try{await put('orders',id,{id:id,uid:UID,name:$('#nm').value,phone:$('#ph').value,address:$('#ad').value,area:ZN[zone][0],items:items,total:t.t,pay:$('#pay').value,status:'Received',at:Date.now()});saved=true}catch(x){}}
 try{localStorage.setItem('a1last',id)}catch(x){}$('#tkid').value=id;
 if(WA.indexOf('X')<0)window.open('https://wa.me/'+WA+'?text='+m);else if(!saved)toast('Owner WhatsApp number not set yet');
 $('#ores').innerHTML='<div class="box" style="margin-top:14px;border-color:var(--green)">✅ Order <b>'+id+'</b> placed. Total ₹'+t.t+'. '+(saved?'The restaurant can see it live. Track it above with this ID.':'Send the WhatsApp message to confirm.')+'</div>';
 document.querySelectorAll('#steps span').forEach(function(s,i){s.classList.toggle('on',i===0)});blast($('#of .btn'),'');cart={};save();drawCart()};
$('#tkgo').onclick=async function(){var id=$('#tkid').value.trim().toUpperCase(),st='',L=['Received','Cooking','On the way','Delivered'];if(!id)return;
 if(DB){try{var d=await DB.doc('track/'+id).get();if(d.exists)st=d.data().status}catch(x){}}
 var i=L.indexOf(st);$('#tkres').textContent=st?'Order '+id+': '+st:'Order '+id+': received. The restaurant will update the status here.';document.querySelectorAll('#steps span').forEach(function(s,j){s.classList.toggle('on',j<=Math.max(i,0))})};
try{$('#tkid').value=localStorage.getItem('a1last')||''}catch(x){}
/* owner + live data */
function refresh(){drawMenu();drawDel();drawCart();if(ADMIN)drawSo()}
function drawSo(){$('#aso').innerHTML=M.map(function(c,ci){return c[3].map(function(x,i){var id=ci+'.'+i;return'<button class="tg'+(sold[id]?' on':'')+'" style="'+(sold[id]?'background:var(--red);border-color:var(--red);color:#fff':'')+'" data-so="'+id+'">'+x[0]+'</button>'}).join('')}).join('')}
function listA(el,docs,col){var a=[];docs.forEach(function(d){var v=d.data()||{};for(var k in v){a.push(v[k]);REC[k]=v[k]}});a.sort(function(x,y){return y.at-x.at});
 var S=col==='orders'?['Cooking','On the way','Delivered','Cancelled']:['Confirmed','Cancelled'];
 $(el).innerHTML=a.length?a.map(function(o){return'<div class="box" style="margin-bottom:12px"><b class="gold">'+o.id+'</b> · '+(TR[o.id]||o.status)+'<br>'+(col==='orders'?o.items+'<br>₹'+o.total+' · '+o.pay+' · '+o.area+'<br>'+o.address+'<br>':o.date+' · '+o.slot+' · '+o.guests+' guests · Table T'+o.table+'<br>')+o.name+' · <a class="gold" href="tel:'+o.phone+'">'+o.phone+'</a><div class="row" style="margin-top:10px">'+S.map(function(s){return'<button class="tg" data-st="'+col+'|'+o.id+'|'+s+'">'+s+'</button>'}).join('')+'</div></div>'}).join(''):'<p class="mute">Nothing yet.</p>'}
document.addEventListener('click',async function(e){var s=e.target.closest('[data-st]'),o=e.target.closest('[data-so]');if(!DB)return;
 try{if(s){var p=s.dataset.st.split('|');var rc=REC[p[1]];await DB.doc('track/'+p[1]).set({status:p[2]});if(p[0]==='book'&&p[2]==='Cancelled')await DB.doc('slots/'+rc.key).delete();toast(p[1]+': '+p[2])}
 if(o){var id=o.dataset.so;if(sold[id])await DB.doc('soldout/'+id).delete();else await DB.doc('soldout/'+id).set({v:1})}}catch(x){toast('Could not save. Check your access.')}});
(async function(){try{if(!window.claude)return;var u=await claude.use('user');ADMIN=u?await u.canEdit():false;UID=u?String(await u.id()):'';DB=await claude.use('db')}catch(x){}
 if(ADMIN)$('#adm').style.display='';
 if(DB){DB.collection('slots').onSnapshot(function(q){tk={};q.docs.forEach(function(d){tk[d.id]=1});if(target==='dine')drawDine()});
  DB.collection('soldout').onSnapshot(function(q){sold={};q.docs.forEach(function(d){sold[d.id]=1});refresh()});
  if(ADMIN){drawSo();DB.collection('orders').onSnapshot(function(q){LD.orders=q.docs;relist()});DB.collection('book').onSnapshot(function(q){LD.book=q.docs;relist()});DB.collection('track').onSnapshot(function(q){TR={};q.docs.forEach(function(d){TR[d.id]=(d.data()||{}).status});relist()})}}
 if(location.hash==='#admin')route()})();
$('#wa').href='https://wa.me/'+WA;$('#call').href='tel:+'+PHONE;
/* router */
function route(){var h=(location.hash||'#welcome').slice(1);if(!$('#p-'+h))h='welcome';if(h==='admin'&&!ADMIN)h='home';
 document.querySelectorAll('.page').forEach(function(p){p.classList.toggle('on',p.id==='p-'+h)});
 document.querySelectorAll('#top nav a').forEach(function(a){a.classList.toggle('on',a.dataset.n===h)});
 document.body.classList.toggle('intro',h==='welcome');window.scrollTo(0,0);if(h==='menu')drawMenu();if(h==='delivery'){drawDel();drawCart()}if(h==='dine')drawDine();target=h}
var target='welcome';addEventListener('hashchange',route);
$('#enter').onclick=function(){blast(this,'');setTimeout(function(){location.hash='#home'},650)};
/* 3D scene */
var R=new THREE.WebGLRenderer({canvas:$('#stage'),antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio,2));
var S=new THREE.Scene(),C=new THREE.PerspectiveCamera(40,1,.1,100);
S.add(new THREE.AmbientLight(0xffe2b8,.6));var L=new THREE.DirectionalLight(0xffe0a8,1.2);L.position.set(4,8,5);S.add(L);var P=new THREE.PointLight(0xe8392e,1.4,30);P.position.set(-5,2,3);S.add(P);
var G=new THREE.Group();S.add(G),brass=new THREE.MeshStandardMaterial({color:0xcf9a30,metalness:.85,roughness:.28});
G.add(new THREE.Mesh(new THREE.CylinderGeometry(3,2.7,.18,64),brass));var rm=new THREE.Mesh(new THREE.TorusGeometry(3,.09,16,64),brass);rm.rotation.x=Math.PI/2;rm.position.y=.09;G.add(rm);
[0xe8392e,0xffc62e,0x5fa05a,0x8a3a1c,0xf4e3bf].forEach(function(c,i){var a=i/5*6.283,x=Math.cos(a)*1.75,z=Math.sin(a)*1.75,
 b=new THREE.Mesh(new THREE.CylinderGeometry(.72,.5,.38,40,1,true),brass);b.position.set(x,.3,z);G.add(b);
 var f=new THREE.Mesh(new THREE.CylinderGeometry(.66,.66,.06,40),new THREE.MeshStandardMaterial({color:c,roughness:.5}));f.position.set(x,.43,z);G.add(f);
 var m=new THREE.Mesh(new THREE.SphereGeometry(.34,24,12,0,6.283,0,1.57),new THREE.MeshStandardMaterial({color:c,roughness:.6}));m.position.set(x,.46,z);G.add(m)});
var rc=new THREE.Mesh(new THREE.SphereGeometry(.7,32,16,0,6.283,0,1.57),new THREE.MeshStandardMaterial({color:0xfff3d6,roughness:.8}));rc.position.y=.1;G.add(rc);
var orb=[];for(var i=0;i<14;i++){var o=new THREE.Mesh(i%2?new THREE.SphereGeometry(.16,16,12):new THREE.ConeGeometry(.14,.5,10),new THREE.MeshStandardMaterial({color:i%2?0xffc62e:0xe8392e,roughness:.4}));o.userData={a:i/14*6.283,r:4+Math.random()*1.5,h:Math.random()*3,s:.2+Math.random()*.3};S.add(o);orb.push(o)}
var mx=0,my=0;addEventListener('mousemove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
function size(){R.setSize(innerWidth,innerHeight,false);C.aspect=innerWidth/innerHeight;C.updateProjectionMatrix()}addEventListener('resize',size);size();
var t=0,cx=0,cs=1,co=1,still=matchMedia('(prefers-reduced-motion:reduce)').matches;
(function loop(){t+=still?0:.007;var w=innerWidth>760,intro=target==='welcome',home=target==='home';
 var tx=intro?0:(w?3.4:0),ts=intro?(w?1.25:.8):(w?.8:.45),to=intro?1:(home?.9:.22),ty=intro?(w?-.2:1.6):(w?0:2.4);
 cx+=(tx-cx)*.05;cs+=(ts-cs)*.05;co+=(to-co)*.05;G.position.x=cx;G.position.y+=(ty-G.position.y)*.05;G.scale.setScalar(cs);$('#stage').style.opacity=co;
 G.rotation.y=t*1.4+mx*.7;G.rotation.x=.5+my*.25+(intro?0:.1);
 orb.forEach(function(o,i){var d=o.userData;d.a+=d.s*.01;o.position.set(Math.cos(d.a)*d.r+cx,Math.sin(t*2+i)*.5+d.h-1,Math.sin(d.a)*d.r);o.rotation.x+=.03;o.rotation.y+=.04});
 C.position.set(0,3.4,9);C.lookAt(0,0,0);R.render(S,C);requestAnimationFrame(loop)})();
save();route();
