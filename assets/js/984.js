"use strict";(self["webpackChunkaliance"]=self["webpackChunkaliance"]||[]).push([[984],{9154:function(e,a,t){t.d(a,{Z:function(){return I}});var s=t(3396),n=t(7139),l=t(9242);const r=e=>((0,s.dD)("data-v-881b6bd0"),e=e(),(0,s.Cn)(),e),o={class:"container"},i={class:"row"},c={class:"header__desc-pages"},g=(0,s.Uk)("главная"),d=r((()=>(0,s._)("span",null,"—",-1))),_=["innerHTML"],u=["src"],m=["src"];function h(e,a,r,h,p,f){const b=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("header",{class:(0,n.C_)(["header",[`${r.pageName}__header`,{"no-img":!this.showImg},{"bg-img-has":r.headerBgImg}]])},[(0,s._)("div",o,[(0,s._)("div",i,[(0,s._)("div",{class:(0,n.C_)(["header__desc",`${r.pageName}__header-content-desc`])},[(0,s._)("h1",{class:(0,n.C_)(["header__desc-title",`${r.pageName}__header-title`])},(0,n.zw)(r.title),3),(0,s._)("p",c,[(0,s.Wm)(b,{to:"/"},{default:(0,s.w5)((()=>[g])),_:1}),d,(0,s._)("span",{class:"last-active",innerHTML:1==r.pagesInfo.count?r.pagesInfo.page2Name:2==r.pagesInfo.count?`${r.pagesInfo.page2Name}  <span>—</span>  <span>${r.pagesInfo.page3Name}</span>`:r.pagesInfo.page2Name},null,8,_)])],2),(0,s.wy)((0,s._)("img",{src:p.headerImg,alt:"",class:"header__img"},null,8,u),[[l.F8,r.showImg]])])]),(0,s.wy)((0,s._)("img",{src:r.headerBgImg?t(7173)(`./${r.headerBgImg}`):"",alt:"",class:"header__bg-img"},null,8,m),[[l.F8,r.headerBgImg]])],2)}var p={name:"Header",data(){return{headerImg:t(7985)}},props:{pageName:{type:String,default:"section",required:!0},title:{type:String,default:"title"},pagesInfo:{type:Object,default:{count:1,page2Name:"page",page3Name:"page"}},showImg:{type:Boolean,default:!1},headerBgImg:{type:String,default:""}}},f=t(89);const b=(0,f.Z)(p,[["render",h],["__scopeId","data-v-881b6bd0"]]);var I=b},7984:function(e,a,t){t.r(a),t.d(a,{default:function(){return L}});var s=t(3396),n=t(7139);const l={class:"main"},r={class:"blog__about-section"},o={class:"container"},i={class:"row"},c={class:"share__fixed-sidebar"},g={class:"share__content"},d={class:"share__content-title"},_={class:"share-links"},u=["href","innerHTML"],m={class:"share__info-content"},h={class:"share__desc-title"},p=["src"],f={class:"share__consult-desc"},b={class:"share__consult-title"},I={class:"share__consult-list"};function w(e,a,w,v,N,k){const B=(0,s.up)("Nav"),M=(0,s.up)("Header"),H=(0,s.up)("BlogSliderSection"),y=(0,s.up)("OfferSection"),D=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(B,{activePage:"Блог",transparentNav:!1}),(0,s.Wm)(M,{pageName:"blog",pagesInfo:N.headerObj,title:N.headerObj.page3Name,headerBgImg:N.headerBgImgUrl},null,8,["pagesInfo","title","headerBgImg"]),(0,s._)("main",l,[(0,s._)("section",r,[(0,s._)("div",o,[(0,s._)("div",i,[(0,s._)("div",c,[(0,s._)("div",g,[(0,s._)("p",d,(0,n.zw)(N.data.blogMore.main.about.shareLinks.title)+":",1),(0,s._)("div",_,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(N.data.blogMore.main.about.shareLinks.links,((e,a)=>((0,s.wg)(),(0,s.iD)("a",{href:e.url,class:"share-link",key:a,innerHTML:e.icon,target:"_blank"},null,8,u)))),128))])])]),(0,s._)("div",m,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(N.data.blogMore.main.about.content.info,((e,a)=>((0,s.wg)(),(0,s.iD)("div",{class:"share__info-desc",key:a},[(0,s._)("h3",h,(0,n.zw)(e.title),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.texts,((e,a)=>((0,s.wg)(),(0,s.iD)("p",{class:"share__desc-text",key:a},(0,n.zw)(e.text),1)))),128))])))),128)),(0,s._)("img",{src:t(7173)(`./${N.shareImg}`),alt:"",class:"share__info-img"},null,8,p),(0,s._)("div",f,[(0,s._)("p",b,(0,n.zw)(N.consultTitle),1),(0,s._)("ul",I,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(N.consultList,((e,a)=>((0,s.wg)(),(0,s.iD)("li",{class:"share__consult-list-item",key:a},(0,n.zw)(e.text),1)))),128))])])])])])]),(0,s.Wm)(H),(0,s.Wm)(y)]),(0,s.Wm)(D)],64)}var v=t(3361),N=t(5860),k=t(8313),B=t(669),M=t(8588),H=t(9154),y={name:"Blog More",components:{Nav:v.Z,Header:H.Z,OfferSection:N.Z,Footer:k.Z,BlogSliderSection:B.Z},data(){return{data:M,shareImg:M.blogMore.main.about.content.image,consultTitle:M.blogMore.main.about.content.consultInfo.title,consultList:M.blogMore.main.about.content.consultInfo.list,headerObj:{count:2,page2Name:M.blog.header.title,page3Name:M.blogMore.header.title},headerBgImgUrl:"images/blogMore/header/header-img.png"}}},D=t(89);const S=(0,D.Z)(y,[["render",w],["__scopeId","data-v-e8678e1c"]]);var L=S}}]);