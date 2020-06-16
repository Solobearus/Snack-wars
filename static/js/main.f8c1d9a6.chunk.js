(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),r=i(19),l=i.n(r),s=(i(72),i(73),i(16)),c=i(17),o=i(65),u=i(60),y=i(66),m=i(20),g=i(61),d=i.n(g),h=i(32),p=i.n(h),C=i(31),_=i.n(C),v=function(e){return a.a.createElement("div",{className:p.a.MainMenu},a.a.createElement("div",{className:p.a.App_header},a.a.createElement("p",null,"Snack Wars"),a.a.createElement("img",{src:_.a,className:p.a.App_logo,onClick:e.click,alt:"logo"}),a.a.createElement("p",null,"Click the logo to begin")))},T=i(21),E=i(8),f=i.n(E),G=i(62),k=i.n(G),I=i(22),H=i.n(I),S=function(e){var t=H.a.Empty,i=null;return e.main?(i=function(){e.toggleCell(e.rowindexcell,e.columnindexcell)},t=e.cellValue?H.a.Occupied_main:H.a.Empty_main):e.cellValue&&(t=H.a.Occupied),a.a.createElement("div",{className:t,onClick:i})},w=function(e){var t={};return e.main||(t={width:"100px",height:"100px"}),a.a.createElement("div",{className:k.a.City,style:t,onClick:function(){e.click(e.index)}},(e.cityGrid||[]).map(function(t,i){return t.map(function(t,n){return a.a.createElement(S,{key:i+","+n,rowindexcell:i,columnindexcell:n,cellValue:t,toggleCell:e.toggleCell,main:e.main})})}))},O=i(33),F=i.n(O),b=function(e){var t=e.grids.slice(0,8);return a.a.createElement("div",{className:F.a.SideList},a.a.createElement("div",{className:F.a.display},a.a.createElement("h2",null,e.title),a.a.createElement("div",{className:F.a.list},(t||[]).map(function(t,i){return a.a.createElement(w,{key:i,cityGrid:t,main:!1,index:i,click:e.click})}))))},W=i(64),x=i.n(W),P=i(40);var Y=function(e){var t=Object(P.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:{light:window.getComputedStyle(document.documentElement).getPropertyValue("--light-main"),main:window.getComputedStyle(document.documentElement).getPropertyValue("--light-main"),dark:window.getComputedStyle(document.documentElement).getPropertyValue("--medium-main"),contrastText:window.getComputedStyle(document.documentElement).getPropertyValue("--title-main")}}});return a.a.createElement(P.MuiThemeProvider,{theme:t},a.a.createElement(x.a,{boxshadow:3,variant:"contained",color:"primary",onClick:e.click},e.value))},V=function(e){var t=Object(T.a)(e.gameEngine.getCityTurnHistory());t.reverse();var i=Object(T.a)(e.gameEngine.getCityPremadeGrids());return i.reverse(),a.a.createElement("div",{className:f.a.GameScreen},a.a.createElement("div",{className:f.a.Side1},a.a.createElement(b,{grids:t,title:"History",click:e.goBackInTime})),a.a.createElement("div",{className:f.a.Container},a.a.createElement("div",{className:f.a.Title},a.a.createElement("img",{src:_.a,alt:"logo"}),a.a.createElement("h1",null,"Snack Wars")),a.a.createElement(w,{cityGrid:e.gameEngine.getCurrentCityGrid(),toggleCell:e.toggleCell,main:!0,click:function(){}}),a.a.createElement("div",{className:f.a.Buttons},a.a.createElement("div",{className:f.a.group},a.a.createElement(Y,{click:e.previousTurn,value:"Prev turn"}),a.a.createElement(Y,{click:e.togglePlay,value:e.playStopValue}),a.a.createElement(Y,{click:e.nextTurn,value:"Next turn"}),a.a.createElement(Y,{click:e.clearCity,value:"Clear city"}),a.a.createElement(Y,{click:e.toggleAllowWrapping,value:e.wrappingValue}),a.a.createElement(Y,{click:e.randCity,value:"Randomize city"})))),a.a.createElement("div",{className:f.a.Side2},a.a.createElement(b,{grids:i,title:"Premade",click:e.setCurrentCityGridFromPremade})))},N=function(){function e(){Object(s.a)(this,e),this.WIDTH_OF_CITY=20,this.HEIGHT_OF_CITY=20,this.cityGrid=this.initializeCityGrid(),this.clearCity()}return Object(c.a)(e,[{key:"initializeCityGrid",value:function(){for(var e=new Array(this.HEIGHT_OF_CITY),t=0;t<e.length;t++)e[t]=new Array(this.WIDTH_OF_CITY);return e}},{key:"clearCity",value:function(){for(var e=this.initializeCityGrid(),t=0;t<this.HEIGHT_OF_CITY;t++)for(var i=0;i<this.WIDTH_OF_CITY;i++)e[t][i]=!1;this.cityGrid=e}},{key:"randCity",value:function(){for(var e=this.initializeCityGrid(),t=0;t<this.HEIGHT_OF_CITY;t++)for(var i=0;i<this.WIDTH_OF_CITY;i++){var n=Math.random()>=.5;e[t][i]=n}this.cityGrid=e}},{key:"logCityGrid",value:function(){for(var e=0;e<this.HEIGHT_OF_CITY;e++){for(var t=0;t<this.WIDTH_OF_CITY;t++)this.cityGrid[e][t]+", ";"],\n["}}},{key:"runInteractions",value:function(e){for(var t=this.initializeCityGrid(),i=0;i<this.HEIGHT_OF_CITY;i++)for(var n=0;n<this.WIDTH_OF_CITY;n++)t[i][n]=this.cellInteraction(i,n,e);this.cityGrid=t}},{key:"cellInteraction",value:function(e,t,i){for(var n=this.cityGrid[e][t],a=n,r=0,l=-1;l<=1;l++)for(var s=-1;s<=1;s++)if(0!==l||0!==s)if(i){var c=0,o=0;e+l<=-1?c+=this.HEIGHT_OF_CITY:e+l>=this.HEIGHT_OF_CITY&&(c-=this.HEIGHT_OF_CITY),t+s<=-1?o+=this.WIDTH_OF_CITY:t+s>=this.WIDTH_OF_CITY&&(o-=this.WIDTH_OF_CITY),this.cityGrid[e+l+c][t+s+o]&&r++}else e+l>-1&&e+l<this.HEIGHT_OF_CITY&&t+s>-1&&t+s<this.WIDTH_OF_CITY&&this.cityGrid[e+l][t+s]&&r++;return n?a=2===r||3===r:3===r&&(a=!0),a}},{key:"toggleCell",value:function(e,t){var i=this.setCityGrid(this.cityGrid),n=i[e][t];i[e][t]=!n}},{key:"setCell",value:function(e,t,i){this.cityGrid[e][t]=i}},{key:"getCityGrid",value:function(){return this.cityGrid}},{key:"getNewCityGrid",value:function(){for(var e=this.initializeCityGrid(),t=0;t<this.WIDTH_OF_CITY;t++)for(var i=0;i<this.HEIGHT_OF_CITY;i++)e[t][i]=this.cityGrid[t][i];return e}},{key:"setCityGrid",value:function(e){for(var t=this.initializeCityGrid(),i=0;i<this.WIDTH_OF_CITY;i++)for(var n=0;n<this.HEIGHT_OF_CITY;n++)t[i][n]=e[i][n];return this.cityGrid=t,t}}]),e}(),j=[[[!1,!0,!0,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!0,!0,!0,!1],[!0,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!0],[!0,!1,!1,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!0,!1,!1,!0],[!0,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!0],[!0,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!0],[!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!0],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!0],[!0,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!0],[!0,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!0],[!0,!1,!1,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!0,!1,!1,!0],[!0,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!0],[!1,!0,!0,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!0,!0,!0,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1],[!1,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!0,!1],[!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1],[!1,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!0,!1],[!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]]],A=function(){function e(){Object(s.a)(this,e),this.initializeGame()}return Object(c.a)(e,[{key:"initializeGame",value:function(){this.currentCity=new N,this.cityTurnHistory=[]}},{key:"nextTurn",value:function(e){this.cityTurnHistory.push(this.currentCity.getCityGrid()),this.currentCity.runInteractions(e)}},{key:"clearCity",value:function(){this.cityTurnHistory.push(this.currentCity.getCityGrid()),this.currentCity.clearCity()}},{key:"randCity",value:function(){this.cityTurnHistory.push(this.currentCity.getCityGrid()),this.currentCity.randCity()}},{key:"toggleCell",value:function(e,t){var i=this.currentCity.getCityGrid();this.cityTurnHistory.push(Object(T.a)(i)),this.currentCity.toggleCell(e,t)}},{key:"previousTurn",value:function(){this.cityTurnHistory.length>0&&this.currentCity.setCityGrid(this.cityTurnHistory.pop())}},{key:"goBackInTime",value:function(e){if(this.cityTurnHistory.length>0){var t=this.cityTurnHistory.slice(0,this.cityTurnHistory.length-e);this.cityTurnHistory=t,this.currentCity.setCityGrid(this.cityTurnHistory.pop())}}},{key:"getCurrentCityGrid",value:function(){return this.currentCity.getCityGrid()}},{key:"setCurrentCityGridFromPremade",value:function(e){this.cityTurnHistory.push(this.currentCity.getCityGrid()),this.currentCity.setCityGrid(this.getCityPremadeGrids()[j.length-e-1])}},{key:"getCurrentCity",value:function(){return this.currentCity}},{key:"getCityTurnHistory",value:function(){return this.cityTurnHistory}},{key:"getCityPremadeGrids",value:function(){return j}}]),e}(),M=function(e){function t(e){var i;Object(s.a)(this,t),(i=Object(o.a)(this,Object(u.a)(t).call(this,e))).nextTurn=function(){i.state.gameEngine.nextTurn(i.state.allowWrapping),i.setState({gameEngine:i.state.gameEngine})},i.previousTurn=function(){i.state.gameEngine.previousTurn(),i.setState({gameEngine:i.state.gameEngine})},i.randCity=function(){i.state.gameEngine.randCity(),i.setState({gameEngine:i.state.gameEngine})},i.clearCity=function(){i.state.gameEngine.clearCity(),i.setState({gameEngine:i.state.gameEngine})},i.toggleCell=function(e,t){i.state.gameEngine.toggleCell(e,t),i.setState({gameEngine:i.state.gameEngine})},i.setCurrentCityGridFromPremade=function(e){i.state.gameEngine.setCurrentCityGridFromPremade(e),i.setState({gameEngine:i.state.gameEngine})},i.goBackInTime=function(e){i.state.gameEngine.goBackInTime(e),i.setState({gameEngine:i.state.gameEngine})},window.app=Object(m.a)(Object(m.a)(i));var n=new A;return i.state={gameEngine:n,display:!1,isPlaying:!1,isWrapping:!1,playStopValue:"Play",wrappingValue:"Wrap"},i}return Object(y.a)(t,e),Object(c.a)(t,[{key:"startGame",value:function(){this.setState({display:!0})}},{key:"togglePlay",value:function(){var e=this,t=!this.state.isPlaying;this.setState({isPlaying:t}),this.state.isPlaying?(clearInterval(this.playingInterval),this.setState({playStopValue:"Play"})):(this.playingInterval=setInterval(function(){return e.nextTurn()},700),this.setState({playStopValue:"Stop"}))}},{key:"toggleAllowWrapping",value:function(e){var t=!this.state.allowWrapping;this.setState({allowWrapping:t}),this.state.allowWrapping?this.setState({wrappingValue:"Wrap"}):this.setState({wrappingValue:"Dont Wrap"})}},{key:"render",value:function(){var e=this,t=a.a.createElement(v,{click:function(){e.startGame()}});return this.state.display&&(t=a.a.createElement(V,{gameEngine:this.state.gameEngine,goBackInTime:this.goBackInTime.bind(this),setCurrentCityGridFromPremade:this.setCurrentCityGridFromPremade.bind(this),previousTurn:this.previousTurn.bind(this),nextTurn:this.nextTurn.bind(this),randCity:this.randCity.bind(this),clearCity:this.clearCity.bind(this),togglePlay:this.togglePlay.bind(this),playStopValue:this.state.playStopValue,toggleCell:this.toggleCell.bind(this),wrappingValue:this.state.wrappingValue,toggleAllowWrapping:this.toggleAllowWrapping.bind(this)})),a.a.createElement("div",{className:d.a.App},t)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},22:function(e,t,i){e.exports={Empty_main:"Cell_Empty_main__1VuHH",Occupied_main:"Cell_Occupied_main__3f-Gg",Empty:"Cell_Empty__1j34J",Occupied:"Cell_Occupied__k4YJS"}},31:function(e,t,i){e.exports=i.p+"static/media/logo.4434792f.png"},32:function(e,t,i){e.exports={MainMenu:"MainMenu_MainMenu__23EmJ",App_logo:"MainMenu_App_logo__ar5HX","App-logo-spin":"MainMenu_App-logo-spin__2mgFz",App_header:"MainMenu_App_header__2tRZm"}},33:function(e,t,i){e.exports={SideList:"SideList_SideList__3VceQ",display:"SideList_display__1Udml",list:"SideList_list__1a48i"}},61:function(e,t,i){e.exports={App:"App_App__o-7yT"}},62:function(e,t,i){e.exports={City:"City_City__3jpY4"}},67:function(e,t,i){e.exports=i(156)},72:function(e,t,i){},73:function(e,t,i){},8:function(e,t,i){e.exports={GameScreen:"GameScreen_GameScreen__CkX8g",Side1:"GameScreen_Side1__3sSyj",Side2:"GameScreen_Side2__1fMH4",Container:"GameScreen_Container__YZPEF",Title:"GameScreen_Title__1eLs8",Buttons:"GameScreen_Buttons__2GSo0",group:"GameScreen_group__24lLN"}}},[[67,1,2]]]);
//# sourceMappingURL=main.f8c1d9a6.chunk.js.map