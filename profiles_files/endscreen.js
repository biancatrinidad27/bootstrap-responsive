(function(g){var window=this;var Sva=function(a,b,c,d){var e=b.dc();g.T(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.getPlaylistId();d=b.bc(c,d?d:"mqdefault.jpg");var k=b instanceof g.BP?g.hW(b.lengthSeconds):null,l=!!f,f=l&&"RD"==g.gR(f).type,m=b instanceof g.BP?b.Aa:null;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,watch:g.U("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.qn(c),is_live:m,is_list:l,is_mix:f,background:d?"background-image: url("+
d+")":""};b instanceof g.iR&&(c.playlist_length=b.getLength());a.update(c)},Q7=function(a,b){g.eW.call(this,{H:"div",
ba:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.o=a;this.N=!1},R7=function(a){var b={H:"span",
M:"ytp-upnext-top",K:[{H:"span",M:"ytp-upnext-header",K:[g.U("YTP_PLAYLIST_UP_NEXT")]},{H:"span",M:"ytp-upnext-title",K:["{{title}}"]},{H:"span",M:"ytp-upnext-author",K:["{{author}}"]}]},c={href:"{{url}}","aria-label":g.U("YTP_AUTOPLAY_NEXT")},b={H:"div",M:"ytp-upnext",P:{"aria-label":"{{watch}}"},K:[{H:"div",M:"ytp-cued-thumbnail-overlay-image",P:{style:"{{background}}"}},b,{H:"a",M:"ytp-upnext-autoplay-icon",P:c,K:[{H:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 98 98",width:"100%"},K:[{H:"circle",
M:"ytp-svg-autoplay-circle",P:{cx:"49",cy:"49",fill:"#000","fill-opacity":"0.8",r:"48"}},{H:"circle",M:"ytp-svg-autoplay-ring",P:{cx:"-49",cy:"49","fill-opacity":"0",r:"46.5",stroke:"#FFFFFF","stroke-dasharray":"293","stroke-dashoffset":"-293","stroke-width":"4",transform:"rotate(-90)"}},{H:"polygon",M:"ytp-svg-autoplay-triangle",P:{fill:"#fff",points:"32,27 72,49 32,71"}}]}]},{H:"span",M:"ytp-upnext-bottom",K:[{H:"span",M:"ytp-upnext-cancel"},{H:"span",M:"ytp-upnext-paused",K:[g.U("YTP_AUTOPLAY_PAUSED_3")]}]},
{H:"span",M:"ytp-upnext-close"}]};g.Y.call(this,b);this.B=null;c=this.va["ytp-upnext-cancel"];b=this.va["ytp-upnext-close"];this.B=new g.Y({H:"button",ba:["ytp-upnext-cancel-button","ytp-button"],P:{tabindex:0,"aria-label":g.U("YTP_AUTOPLAY_CANCEL")},K:[g.U("YTP_CANCEL")]});g.M(this,this.B);this.B.U("click",this.qA,this);this.B.Ea(c);c=new g.Y({H:"button",ba:["ytp-upnext-close-button","ytp-button"],P:{"aria-label":g.U("YTP_AUTOPLAY_CANCEL")}});g.M(this,c);c.U("click",this.qA,this);c.Ea(b);this.o=
a;this.J=this.va["ytp-svg-autoplay-ring"];this.F=this.D=this.A=this.C=null;this.G=new g.Ct(this.Im,5E3,this);g.M(this,this.G);this.I=0;this.R(this.va["ytp-upnext-autoplay-icon"],"click",this.WP);this.nA();this.R(a,"autonavvisibility",this.nA);this.R(a,"mdxnowautoplaying",this.mP);this.R(a,"mdxautoplaycanceled",this.nP);this.R(a,"mdxautoplayupnext",this.tC);3==this.o.Ya()&&(a=(a=g.bV(g.XU(this.o)))?a.yH():null)&&this.tC(a)},Tva=function(a,b){a.C=b;
Sva(a,b,g.X(a.o),"hqdefault.jpg")},S7=function(a,b){a.A||(g.sG("a11y-announce",g.U("YTP_PLAYLIST_UP_NEXT")+" "+a.C.title),a.I=(0,g.FG)(),a.A=new g.Ct((0,g.z)(a.Pp,a,b),25),a.Pp(b));
g.Rp(a.element,"ytp-upnext-autoplay-paused")},U7=function(a){T7(a);
a.I=(0,g.FG)();a.Pp();g.S(a.element,"ytp-upnext-autoplay-paused")},T7=function(a){a.A&&(a.A.dispose(),a.A=null)},Uva=function(a){Q7.call(this,a,"subscribecard-endscreen");
var b=a.ga();this.A=new g.Y({H:"div",M:"ytp-subscribe-card",K:[{H:"img",M:"ytp-author-image",P:{src:b.profilePicture}},{H:"div",M:"ytp-subscribe-card-right",K:[{H:"div",M:"ytp-author-name",K:[b.author]},{H:"div",M:"html5-subscribe-button-container"}]}]});g.M(this,this.A);this.A.Ea(this.element);this.B=new g.P1(g.U("YTP_SUBSCRIBE"),null,g.U("YTP_UNSUBSCRIBE"),null,!0,!1,b.El,b.subscribed,"trailer-endscreen",null,null,a);g.M(this,this.B);this.B.Ea(this.A.va["html5-subscribe-button-container"]);this.hide()},
V7=function(a){var b=g.X(a),b=b.A&&!b.F;
g.Y.call(this,{H:"a",M:"ytp-videowall-still",P:{href:"{{url}}",target:b?"_blank":"","aria-label":"{{watch}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},K:[{H:"div",M:"ytp-videowall-still-image",P:{style:"{{background}}"}},{H:"span",M:"ytp-videowall-still-info",K:[{H:"span",M:"ytp-videowall-still-info-bg",K:[{H:"span",M:"ytp-videowall-still-info-content",P:g.bF||g.Ue?{style:"will-change: opacity"}:void 0,K:[{H:"span",M:"ytp-videowall-still-info-title",K:["{{title}}"]},
{H:"span",M:"ytp-videowall-still-info-author",K:["{{author_and_views}}"]},{H:"span",M:"ytp-videowall-still-info-live",K:[g.U("YTP_LIVE")]},{H:"span",M:"ytp-videowall-still-info-duration",K:["{{duration}}"]}]}]}]},{H:"span",ba:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],K:[{H:"span",M:"ytp-videowall-still-listlabel-icon"},g.U("YTP_PLAYLIST"),{H:"span",M:"ytp-videowall-still-listlabel-length",K:[" (",{H:"span",K:["{{playlist_length}}"]},")"]}]},{H:"span",ba:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],K:[{H:"span",M:"ytp-videowall-still-listlabel-mix-icon"},g.U("YTP_MIX"),{H:"span",M:"ytp-videowall-still-listlabel-length",K:[" (50+)"]}]}]});this.B=b;this.o=a;this.A=null;this.U("click",this.C);this.U("keypress",this.D);if(g.X(a).da){a=a.app.da;b=this.element;g.fb(a.g,b);g.jb(a.g,b);var c=String(a.G++);b.setAttribute("data-visual-id",c);g.Pe(this,(0,g.z)(a.F,a,b))}},W7=function(a){Q7.call(this,a,"videowall-endscreen");
this.ca=a;this.G=0;this.B=[];this.I=this.D=this.C=null;this.J=this.V=!1;this.F=new g.aG(this);g.M(this,this.F);this.L=new g.Ct(g.Aa(g.S,this.element,"ytp-show-tiles"),0);g.M(this,this.L);var b=new g.Y({H:"button",ba:["ytp-button","ytp-endscreen-previous"],P:{"aria-label":g.U("YTP_PREVIOUS")},K:[g.eE()]});g.M(this,b);b.Ea(this.element);b.U("click",this.OL,this);this.O=new g.FV({H:"div",M:"ytp-endscreen-content"});g.M(this,this.O);this.O.Ea(this.element);b=new g.Y({H:"button",ba:["ytp-button","ytp-endscreen-next"],
P:{"aria-label":g.U("YTP_NEXT")},K:[g.fE()]});g.M(this,b);b.Ea(this.element);b.U("click",this.NL,this);this.A=new R7(a);g.M(this,this.A);g.yV(this.o,this.A.element,4);this.hide()},X7=function(a){return g.zV(a.o)&&a.Tp()&&!a.I},Vva=function(a){return(0,g.I)(a.eg,function(a){return g.XZ(a)})},Wva=function(a,b,c){return 0==b&&a.C.length&&2<=c/2&&2<=c/2&&g.X(a.o).experiments.g("video_wall_emphasize_first")?4:2},Y7=function(a){var b=a.qs();
b!=a.V&&(a.V=b,a.o.X("autonavvisibility"))},Z7=function(a){g.WV.call(this,a);
g.aE({});this.o=null;this.isAvailable=!0;this.A=new g.aG(this);g.M(this,this.A);this.B=g.X(a);Xva(a)?this.o=new W7(this.g):this.B.pa?this.o=new Uva(this.g):this.o=new Q7(this.g);g.M(this,this.o);g.yV(this.g,this.o.element,4);this.yB();this.A.R(a,"videodatachange",this.yB,this);this.A.R(a,"crn_endscreen",this.pL,this);this.A.R(a,"crx_endscreen",this.qL,this)},Xva=function(a){a=g.X(a);
return a.Ic&&!a.pa};g.p(Q7,g.eW);Q7.prototype.create=function(){this.N=!0};
Q7.prototype.destroy=function(){this.N=!1};
Q7.prototype.Tp=function(){return!1};
Q7.prototype.qs=function(){return!1};g.p(R7,g.Y);g.h=R7.prototype;g.h.Im=function(){this.D&&(this.G.stop(),this.Ca(this.F),this.F=null,this.D.close(),this.D=null)};
g.h.nA=function(){g.dW(this,g.YU(this.o))};
g.h.NP=function(){window.focus();this.Im()};
g.h.hide=function(){g.Y.prototype.hide.call(this)};
g.h.Pp=function(a){a=a||g.X(this.o).experiments.o("autoplay_time")||1E4;var b=Math.min((0,g.FG)()-this.I,a);a=Math.min(b/a,1);this.J.setAttribute("stroke-dashoffset",-293*(a+1));1<=a&&3!=this.o.Ya()?this.select(!0):this.A&&this.A.start()};
g.h.select=function(a){a=void 0===a?!1:a;var b=g.X(this.o);if(b.experiments.g("autonav_notifications")&&a&&window.Notification&&window.document.hasFocus){var c=window.Notification.permission;g.lV(this.o,"xwebnotifications",{permission:c});"default"==c?window.Notification.requestPermission():"granted"!=c||window.document.hasFocus()||(c=this.C.dc(),this.Im(),this.D=new window.Notification(g.U("YTP_PLAYLIST_UP_NEXT"),{body:c.title,icon:c.bc(b)}),this.F=this.R(this.D,"click",this.NP),this.G.start())}T7(this);
this.o.tj(!1,a)};
g.h.WP=function(a){!g.Be(this.B.element,g.RF(a))&&g.HZ(a,this.o)&&this.select()};
g.h.qA=function(){g.mV(this.o,"autonavcancel");g.$U(this.o,!0)};
g.h.mP=function(a){this.o.Ya();this.show();S7(this,a)};
g.h.tC=function(a){this.o.Ya();this.C&&this.C.dc().videoId==a.dc().videoId||Tva(this,a)};
g.h.nP=function(){this.o.Ya();T7(this);this.hide()};
g.h.W=function(){T7(this);this.Im();g.Y.prototype.W.call(this)};g.p(Uva,Q7);g.p(V7,g.Y);V7.prototype.Hj=function(){var a=this.A.dc().videoId,b=this.A.getPlaylistId();g.A2(this.o.app,a,this.A.Ud,b,void 0,void 0)};
V7.prototype.C=function(a){g.CV(this.o,this.element);g.HZ(a,this.o,this.B,this.A.Ud||void 0)&&this.Hj()};
V7.prototype.D=function(a){switch(a.keyCode){case 13:case 32:g.WF(a)||(this.Hj(),g.YF(a))}};g.p(W7,Q7);g.h=W7.prototype;g.h.create=function(){Q7.prototype.create.call(this);var a=this.o.ga();a&&(this.C=Vva(a),this.D=a);this.rh();this.F.R(this.o,"appresize",this.rh);this.F.R(this.o,"videodatachange",this.PL);this.F.R(this.o,"autonavchange",this.lz);this.F.R(this.o,"autonavcancel",this.ML);this.F.R(this.element,"transitionend",this.aR)};
g.h.destroy=function(){g.cG(this.F);g.Re(this.B);this.B=[];this.C=null;Q7.prototype.destroy.call(this);g.Rp(this.element,"ytp-show-tiles");this.L.stop()};
g.h.Tp=function(){return 1!=this.D.autonavState};
g.h.show=function(){Q7.prototype.show.call(this);g.Rp(this.element,"ytp-show-tiles");g.X(this.o).isMobile?g.Dt(this.L):this.L.start();(this.J||this.I&&this.I!=this.D.clientPlaybackNonce)&&g.$U(this.o,!1);var a=X7(this);g.zV(this.o)&&g.X(this.o).experiments.g("ui_logging")&&g.lV(this.o,"end",{cancelButtonShow:a?"1":"0",state:this.Tp()?"enabled":"disabled"});a?(Y7(this),2==this.D.autonavState?g.X(this.o).experiments.g("fast_autonav_in_background")&&3==this.o.Tn()?this.A.select(!0):S7(this.A):3==this.D.autonavState&&
U7(this.A)):(g.$U(this.o,!0),Y7(this))};
g.h.hide=function(){Q7.prototype.hide.call(this);U7(this.A);Y7(this)};
g.h.aR=function(a){g.RF(a)==this.element&&this.rh()};
g.h.rh=function(){if(this.C&&this.C.length){g.S(this.element,"ytp-endscreen-paginate");for(var a=g.zh(this.element),b=a.width/a.height,c=96/54,d=2,e=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.C.length,m=Math.pow(2,2),n=l*m,q=Wva(this,0,k),r=Wva(this,1,k),n=n+(Math.pow(q,2)-m),n=n+(Math.pow(r,2)-m),n=n-m;0<n&&(d<f||e<k);){var w=d/2,A=e/2,D=d<=f-2&&n>=A*m,B=e<=k-2&&n>=w*m;if((w+1)/A*c/b>b/(w/(A+1)*c)&&B)n-=w*m,e+=2;else if(D)n-=A*m,d+=2;else if(B)n-=w*m,e+=2;else break}c=!1;f=2+q;n>=
3*m&&6>=l*m-n&&(e>=f||d>=f)&&2>=r&&(c=!0);m=96*d;n=54*e;b=m/n<b?a.height/n:a.width/m;b=Math.min(b,2);m*=b;n*=b;m*=g.Md(a.width/m||1,1,1.21);n*=g.Md(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.O.element;g.yh(a,m,n);g.gh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});Tva(this.A,this.C[0]);g.T(this.element,"ytp-endscreen-takeover",X7(this));Y7(this);m+=4;n+=4;b=0;f=!1;for(k=0;k<d;k++)for(w=0;w<e;w++)if(A=2<r&&1<=b&&!f?b+1:b,D=0,c&&k>=d-2&&w>=e-2?D=
1:0==w%2&&0==k%2&&(w<q&&k<q?0==w&&0==k&&(D=q):2<r&&w>=e-r&&k>=d-r?w==e-r&&k==d-r&&(f=!0,A=1,D=r):D=2),A=g.Nd(A+this.G,l),0!=D){B=this.B[b];B||(B=new V7(this.o),this.B[b]=B,a.appendChild(B.element));var Q=Math.floor(n*w/e),ba=Math.floor(m*k/d),Wa=Math.floor(n*(w+D)/e)-Q-4,ob=Math.floor(m*(k+D)/d)-ba-4;g.nh(B.element,ba,Q);g.yh(B.element,ob,Wa);g.gh(B.element,"transitionDelay",(w+k)/20+"s");g.T(B.element,"ytp-videowall-still-mini",1==D);g.T(B.element,"ytp-videowall-still-large",2<D);D=B;A=this.C[A];
D.A=A;Sva(D,A,g.X(D.o),g.Pp(D.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg");B=A.Ud;A=D.o;g.X(A).da&&(A=A.app.da,D=D.element,B=B&&B.itct,Q=D.getAttribute("data-visual-id"),g.fb(A.g,D),g.AV(A,"onLogServerVeCreated",{id:Q,tracking_params:B}));b++}g.T(this.element,"ytp-endscreen-paginate",b<l);for(d=this.B.length-1;d>=b;d--)e=this.B[d],g.ue(e.element),g.Qe(e);this.B.length=b}};
g.h.PL=function(){var a=this.o.ga();this.D!=a&&(this.G=0,this.C=Vva(a),this.D=a,this.rh())};
g.h.NL=function(){this.G+=this.B.length;this.rh()};
g.h.OL=function(){this.G-=this.B.length;this.rh()};
g.h.IJ=function(){return!!this.A.A};
g.h.lz=function(a){1==a?(this.J=!1,this.I=this.D.clientPlaybackNonce,T7(this.A),this.g&&this.rh()):(this.J=!0,this.g&&X7(this)&&(2==a?S7(this.A):3==a&&U7(this.A)))};
g.h.ML=function(a){if(a){for(a=0;a<this.B.length;a++)g.DV(this.ca,this.B[a].element,!0);this.lz(1)}else this.I=null,this.J=!1;this.rh()};
g.h.qs=function(){return this.g&&X7(this)};g.p(Z7,g.WV);g.h=Z7.prototype;g.h.iz=function(){var a=this.g.ga(),b=!Xva(this.g)||!(!a.eg||!a.eg.length),a=g.WP(a,"ypc_module"),c=g.B2(this.g.app);return(b||!1)&&!a&&!c};
g.h.hz=function(){return this.o.qs()};
g.h.FJ=function(){return this.hz()?this.o.IJ():!1};
g.h.W=function(){g.uV(this.g,"endscreen");g.WV.prototype.W.call(this)};
g.h.load=function(){g.WV.prototype.load.call(this);this.o.show();g.X(this.g).pa&&.01>Math.random()&&g.lV(this.g,"end",{trailerEndscreenShow:1})};
g.h.unload=function(){g.WV.prototype.unload.call(this);this.o.hide();this.o.destroy();this.isAvailable=!1};
g.h.pL=function(a){this.iz()&&(this.o.N||this.o.create(),"load"==a.getId()&&this.load())};
g.h.qL=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.yB=function(){g.uV(this.g,"endscreen");var a=Math.max(1E3*(this.g.ga().lengthSeconds-10),0),a=new g.BJ(a,0x8000000000000,{id:"preload",namespace:"endscreen"}),b=new g.BJ(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.rV(this.g,[a,b])};g.oZ.endscreen=Z7;})(_yt_player);