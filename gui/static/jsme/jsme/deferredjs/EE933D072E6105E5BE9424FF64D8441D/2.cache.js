$wnd.jsme.runAsyncCallback2('var SZ="Any",TZ="Aromatic",UZ="Nonring",VZ="Reset",WZ="Ring";function XZ(a,b){if(0>b||b>=a.pb.options.length)throw new hx;}function YZ(a,b){XZ(a,b);return a.pb.options[b].value}function ZZ(){this.pb=$doc.createElement("<SELECT>");this.pb[vg]="gwt-ListBox"}w(400,377,Zk,ZZ);function $Z(){$Z=x}\nfunction a_(a,b){if(null==b)throw new Nt("Missing message: awt.103");var c=-1,d,e,f;f=a.Sc.a.pb;e=wq(Ai);e.text=b;e.removeAttribute("bidiwrapped");e.value=b;d=f.options.length;(0>c||c>d)&&(c=d);c==d?f.add(e):(c=f.options[c])?f.add(e,c.index):f.add(e)}function b_(){$Z();dA.call(this);new cm;this.Sc=new c_((eA(),this))}w(466,453,{57:1,59:1,66:1,80:1,88:1},b_);_.Ge=function(){return jA(this.Sc,this)};\n_.Ve=function(){return(null==this.Pc&&(this.Pc=Oz(this)),this.Pc)+Ka+this.$c+Ka+this._c+Ka+this.Xc+nk+this.Mc+(this.Wc?o:",hidden")+",current="+YZ(this.Sc.a,this.Sc.a.pb.selectedIndex)};function d_(){HT.call(this,7)}w(480,1,Gl,d_);function e_(a){a.Sc.Af(a.j);!Qz(a)&&fT(a);$S(a)}\nfunction f_(a,b,c){BU.call(this);this.Sc&&this.Sc.Bf(!1);zT(this,!1);sA(this,new HT(0));a=new KT(a,1);bT(this,a,null);a=new xA;bT(a,this.i,null);bT(this,a,null);b&&(this.j=Tz(b),yT(this),AU(this.j,~~(qq(b.Dc.pb,vi)/2)-~~(this.Xc/2),~~(qq(b.Dc.pb,ui)/2)-~~(this.Mc/2)));c&&YS(this,c)}w(650,651,ZM,f_);_.th=function(){return tN};w(671,666,wl);_.vd=function(){e_(new f_(this.b,this.a,(PD(),RD)))};w(673,666,wl);_.vd=function(){this.a.bc?this.a.bc.Sc.Re()?this.a.bc.Sc.Df():e_(this.a.bc):this.a.bc=new g_(this.a)};\nfunction h_(a,b){VS(b)==a.a?YS(b,(UA(),eB)):YS(b,a.a)}\nfunction i_(a){var b,c,d,e;e=o;d=!1;VS(j_)!=a.a?(e=Ha,d=!0):VS(k_)!=a.a?(e="!#6",d=!0):VS(l_)!=a.a?(YS(m_,(UA(),eB)),YS(n_,eB),YS(o_,eB),YS(p_,eB),e="F,Cl,Br,I"):(b=VS(q_)!=a.a,c=VS(r_)!=a.a,VS(s_)!=a.a&&(b?e+="c,":c?e+="C,":e+="#6,"),VS(t_)!=a.a&&(b?e+="n,":c?e+="N,":e+="#7,"),VS(u_)!=a.a&&(b?e+="o,":c?e+="O,":e+="#8,"),VS(v_)!=a.a&&(b?e+="s,":c?e+="S,":e+="#16,"),VS(w_)!=a.a&&(b?e+="p,":c?e+="P,":e+="#15,"),VS(m_)!=a.a&&(e+="F,"),VS(n_)!=a.a&&(e+="Cl,"),VS(o_)!=a.a&&(e+="Br,"),VS(p_)!=a.a&&(e+=\n"I,"),qJ(e,Ka)&&(e=EC(e,0,e.length-1)),1>e.length&&!a.b&&(b?e=Kf:c?e=$c:(YS(j_,(UA(),eB)),e=Ha)));b=o;d&&VS(q_)!=a.a&&(b+=";a");d&&VS(r_)!=a.a&&(b+=";A");VS(x_)!=a.a&&(b+=";R");VS(y_)!=a.a&&(b+=";!R");VS(j_)!=a.a&&0<b.length?e=EC(b,1,b.length):e+=b;d=z_.Sc.a.pb.selectedIndex;0<d&&(--d,e+=";H"+d);d=A_.Sc.a.pb.selectedIndex;0<d&&(--d,e+=";D"+d);VS(B_)!=a.a&&(e="~");VS(C_)!=a.a&&(e=Bc);VS(D_)!=a.a&&(e=Zc);VS(E_)!=a.a&&(e="!@");NT(a.e,e)}\nfunction F_(a){G_(a);H_(a);var b=z_.Sc.a;XZ(b,0);b.pb.options[0].selected=!0;b=A_.Sc.a;XZ(b,0);b.pb.options[0].selected=!0;YS(q_,a.a);YS(r_,a.a);YS(x_,a.a);YS(y_,a.a);YS(z_,a.a);YS(A_,a.a);I_(a)}function G_(a){YS(s_,a.a);YS(t_,a.a);YS(u_,a.a);YS(v_,a.a);YS(w_,a.a);YS(m_,a.a);YS(n_,a.a);YS(o_,a.a);YS(p_,a.a)}function H_(a){YS(j_,a.a);YS(k_,a.a);YS(l_,a.a)}function I_(a){YS(B_,a.a);YS(C_,a.a);YS(D_,a.a);YS(E_,a.a);a.b=!1}\nfunction g_(a){CT.call(this,"Atom/Bond Query");this.i=new tT(this.th());NA(this.r,new CU(this));this.a=(PD(),RD);this.c=a;this.d||(a=Tz(a),this.d=new MT(a),AU(this.d,-150,10));this.j=this.d;sA(this,new d_);YS(this,this.a);a=new xA;sA(a,new xB(0,3,1));bT(a,new JT("Atom type :"),null);j_=new tT(SZ);k_=new tT("Any except C");l_=new tT("Halogen");bT(a,j_,null);bT(a,k_,null);bT(a,l_,null);bT(this,a,null);a=new xA;sA(a,new xB(0,3,1));bT(a,new KT("Or select one or more from the list :",0),null);bT(this,\na,null);a=new xA;sA(a,new xB(0,3,1));s_=new tT(Ed);t_=new tT(Ne);u_=new tT($e);v_=new tT(hf);w_=new tT(cf);m_=new tT(me);n_=new tT(Sd);o_=new tT(Dd);p_=new tT(se);bT(a,s_,null);bT(a,t_,null);bT(a,u_,null);bT(a,v_,null);bT(a,w_,null);bT(a,m_,null);bT(a,n_,null);bT(a,o_,null);bT(a,p_,null);bT(this,a,null);a=new xA;sA(a,new xB(0,3,1));z_=new b_;a_(z_,SZ);a_(z_,Vb);a_(z_,ec);a_(z_,gc);a_(z_,hc);bT(a,new JT("Number of hydrogens :  "),null);bT(a,z_,null);bT(this,a,null);a=new xA;sA(a,new xB(0,3,1));A_=\nnew b_;a_(A_,SZ);a_(A_,Vb);a_(A_,ec);a_(A_,gc);a_(A_,hc);a_(A_,qc);a_(A_,rc);a_(A_,sc);bT(a,new KT("Number of connections :",0),null);bT(a,A_,null);bT(a,new KT(" (H\'s don\'t count.)",0),null);bT(this,a,null);a=new xA;sA(a,new xB(0,3,1));bT(a,new JT("Atom is :"),null);q_=new tT(TZ);bT(a,q_,null);r_=new tT("Nonaromatic");bT(a,r_,null);x_=new tT(WZ);bT(a,x_,null);y_=new tT(UZ);bT(a,y_,null);bT(this,a,null);a=new xA;YS(a,lB(VS(this)));sA(a,new xB(0,3,1));bT(a,new JT("Bond is :"),null);B_=new tT(SZ);bT(a,\nB_,null);C_=new tT(TZ);bT(a,C_,null);D_=new tT(WZ);bT(a,D_,null);E_=new tT(UZ);bT(a,E_,null);bT(this,a,null);a=new xA;sA(a,new xB(1,3,1));this.e=new eC(Ha,20);bT(a,this.e,null);bT(a,new tT(VZ),null);bT(a,this.i,null);bT(this,a,null);this.Sc&&this.Sc.Bf(!1);zT(this,!1);G_(this);H_(this);I_(this);YS(q_,this.a);YS(r_,this.a);YS(x_,this.a);YS(y_,this.a);YS(z_,this.a);YS(A_,this.a);h_(this,j_);yT(this);this.Sc.Af(this.j);!Qz(this)&&fT(this);$S(this)}w(686,651,ZM,g_);\n_.uh=function(a,b){var c;H(b,VZ)?(F_(this),h_(this,j_),i_(this)):B(a.f,56)?(I_(this),wu(a.f)===wu(j_)?(G_(this),H_(this)):wu(a.f)===wu(k_)?(G_(this),H_(this)):wu(a.f)===wu(l_)?(G_(this),H_(this)):wu(a.f)===wu(x_)?YS(y_,this.a):wu(a.f)===wu(y_)?(YS(x_,this.a),YS(q_,this.a)):wu(a.f)===wu(q_)?(YS(r_,this.a),YS(y_,this.a)):wu(a.f)===wu(r_)?YS(q_,this.a):wu(a.f)===wu(B_)||wu(a.f)===wu(C_)||wu(a.f)===wu(D_)||wu(a.f)===wu(E_)?(F_(this),this.b=!0):H_(this),h_(this,a.f),i_(this)):B(a.f,57)&&(I_(this),c=a.f,\n0==c.Sc.a.pb.selectedIndex?YS(c,this.a):YS(c,(UA(),eB)),i_(this));107!=this.c.k&&(this.c.k=107,CA(this.c));return!0};_.b=!1;_.c=null;_.d=null;var j_=_.e=null,B_=null,k_=null,q_=null,C_=null,o_=null,s_=null,A_=null,z_=null,n_=null,m_=null,l_=null,p_=null,t_=null,r_=null,y_=null,E_=null,u_=null,w_=null,x_=null,D_=null,v_=null;function c_(a){ML();OL.call(this);this.a=new ZZ;Pw(this.a,new J_(this,a),(nR(),nR(),oR))}w(737,735,{},c_);_.zf=function(){return this.a};_.a=null;\nfunction J_(a,b){this.a=a;this.b=b}w(738,1,{},J_);_.Dd=function(a){eA();EU(a,this.b,YZ(this.a.a,this.a.a.pb.selectedIndex))};_.a=null;_.b=null;w(775,744,{});_.Df=function(){tV(this.c)};V(650);V(686);V(466);V(737);V(738);V(400);nm(WM)(2);\n//@ sourceURL=2.js\n')
