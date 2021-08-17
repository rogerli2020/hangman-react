(this["webpackJsonphangman-react"]=this["webpackJsonphangman-react"]||[]).push([[0],{66:function(e,t,r){},78:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(9),i=r.n(a),o=(r(66),r(5)),l=r(110),s=r(79),u=r(118),d=r(120),j=r(113),b=r(115),O=r(116),h=r(2),f=Object(l.a)((function(e){return{root:{display:"flex",backgroundColor:"rgb(61, 184, 184)",margin:5,maxWidth:400,height:75},cover:{alignSelf:"center",width:60,height:60},details:{display:"flex",flexDirection:"column"},content:{flex:"0 0 auto"}}}));function g(e){var t=f();return Object(h.jsxs)(j.a,{className:t.root,children:[Object(h.jsx)(b.a,{className:t.cover,image:e.playerInfo.avatar,title:"Live from space album cover"}),Object(h.jsxs)("div",{style:{alignSelf:"center"},children:[Object(h.jsx)(O.a,{style:{fontSize:20,fontWeight:"bold",margin:0},children:e.playerInfo.name}),Object(h.jsxs)(O.a,{style:{fontSize:15,color:"black",margin:0},children:[e.role,", Score: ",e.playerInfo.score," pts."]})]})]})}var x=r(54),y=function(){var e=Object(o.c)((function(e){return e.wordBoardReducer}));return Object(h.jsx)(s.a,{style:Object(x.a)({textAlign:"center",color:"primary",margin:3,height:"98%",justifyContent:"center",alignItems:"center"},"textAlign","center"),children:Object(h.jsx)("word-boardtext",{class:null===e?"notext":null,children:null===e?"a word is being selected...":function(e){for(var t="",r=0;r<e.length;r++)t+=e[r],t+=" ";return t}(e)})})},S=function(e){return{type:"ADD_SCORE_TO_GUESSER",data:e}},p=function(e){return{type:"UPDATE_CURRENT_SCORE_CALCULATION",data:e}},E=function(e){return{type:"UPDATE_ROUND_STATE",data:e}},m=function(e){return{type:"UPDATE_WORD_BOARD",data:e}};var R=function(e){var t=Object(o.b)(),r=Object(o.c)((function(e){return e.correctWordReducer})),n=Object(o.c)((function(e){return e.correctGuessesReducer})),c=Object(o.c)((function(e){return e.falseGuessesReducer})),a=Object(o.c)((function(e){return e.playersReducer})),i=Object(o.c)((function(e){return e.hintCountReducer})),l=Object(o.c)((function(e){return e.falseInputCountReducer})),s=function(e){r.includes(e)?t({type:"UPDATE_CORRECT_GUESSES",data:e}):t(function(e){return{type:"UPDATE_FALSE_GUESSES",data:e}}(e)),function(){for(var e=[],c=0;c<r.length;c++)n.includes(r[c])?e+=[r[c]]:e+=["_"];t(m(e)),console.log("Word board updated:",e)}();for(var c=!0,i=0;i<r.length;i++)n.includes(r[i])||(c=!1);(c||a[0].surrendered)&&u()},u=function(){!function(){var e=new Set(r.split("")).size,o=26-e,s=Math.floor(1e3*(o-c.length)/o),u=Math.floor(500*(e-n.length)/e),d=-(100*i+200*l),j=s+u+d+0;!a[0].surrendered&&j>=0?(t(S(j)),t(p([s,u,d,0,j]))):(t(S(0)),t(p([0,0,0,0,0])))}(),t(E("e"))};return Object(h.jsx)("each-key",{class:e.used?"used":"",onClick:function(){e.used||s(e.thisChar)},children:e.thisChar})};var v=function(e){var t=0,r=Object(o.c)((function(e){return e.falseGuessesReducer}))+Object(o.c)((function(e){return e.correctGuessesReducer}));return Object(h.jsx)("each-row-of-keys",{children:e.rowOfKeys.map((function(e){return Object(h.jsx)(R,{used:!!r.includes(e),thisChar:e},t++)}))})};var T=function(){var e=Object(o.c)((function(e){return e.correctGuessesReducer})),t=Object(o.c)((function(e){return e.falseGuessesReducer})),r=Object(o.c)((function(e){return e.roundStateReducer})),n=e+t,c=0;return Object(h.jsxs)("keyboard-panel",{children:[function(){if("n"===r)return Object(h.jsxs)("keyboard-panel",{class:"overlay",children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"waiting for the Executor to select a word..."]})}(),[["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M"]].map((function(e){return Object(h.jsx)(v,{rowOfKeys:e,usedList:n,handleCharacterClick:function(){return console.log("clicked!")}},c++)}))]})},_=r(119);var C=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.correctWordReducer})),r=Object(o.c)((function(e){return e.correctGuessesReducer})),n=Object(o.c)((function(e){return e.falseGuessesReducer})),c=Object(o.c)((function(e){return e.playersReducer})),a=Object(o.c)((function(e){return e.hintCountReducer})),i=Object(o.c)((function(e){return e.falseInputCountReducer})),l=function(){var o=new Set(t.split("")).size,l=26-o,s=Math.floor(1e3*(l-n.length)/l),u=Math.floor(500*(o-r.length)/o),d=-(100*a+200*i),j=s+u+d+0;!c[0].surrendered&&j>=0?(e(S(j)),e(p([s,u,d,0,j]))):(e(S(0)),e(p([0,0,0,0,0])))};return Object(h.jsxs)("form",{onSubmit:function(r){r.preventDefault();var n=r.target[0].value;(n=n.toUpperCase())==t?(e(E("e")),l()):(e({type:"UPDATE_FALSE_INPUT_COUNT"}),alert("Your guess was not correct..."))},children:[Object(h.jsx)(_.a,{variant:"outlined",id:"standard-basic",label:"Enter your guess here...",color:"primary",style:{marginLeft:7,marginTop:5}}),Object(h.jsx)(d.a,{type:"submit",value:"Submit",color:"primary",style:{margin:8,fontSize:15,marginTop:15},children:"SUBMIT"})]})},A=r(42);var U=function(){var e=Object(n.useState)(0),t=Object(A.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(0),i=Object(A.a)(a,2),l=i[0],s=i[1],u=Object(o.b)(),j=[Object(h.jsx)(_.a,{id:"standard-basic",label:"Enter Player1's name",color:"primary",style:{margin:8}}),Object(h.jsx)(_.a,{error:!0,id:"standard-basic",label:"Enter Player1's name",color:"primary",style:{margin:8},helperText:"Name cannot be blank."}),Object(h.jsx)(_.a,{label:"Name Accepted!",id:"validation-outlined-input",style:{margin:8}})],b=[Object(h.jsx)(_.a,{id:"standard-basic",label:"Enter Player2's name",color:"primary",style:{margin:8}}),Object(h.jsx)(_.a,{error:!0,id:"standard-basic",label:"Enter Player1's name",color:"primary",style:{margin:8},helperText:"Name cannot be blank."}),Object(h.jsx)(_.a,{label:"Name Accepted!",id:"validation-outlined-input",style:{margin:8}})];return Object(h.jsx)("div",{style:{height:"auto",width:"auto",position:"absolute",backgroundColor:"rgba(191, 236, 255, 0.98)",display:"flex",left:0,right:0,top:0,bottom:0,zIndex:5,alignItems:"center",justifyContent:"center",fontStyle:"italic",fontSize:25,color:"rgb(6, 54, 55)",textAlign:"center"},children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Let's Play Hangman!"}),Object(h.jsxs)("form",{id:"firstPlayerName",onSubmit:function(e){e.preventDefault();var t=e.target[0].value;0===t.length?c(1):(c(2),u({type:"SET_PLAYER_1_NAME",data:t}))},children:[j[r],Object(h.jsx)(d.a,{variant:"outlined",type:"submit",value:"Submit",color:"primary",style:{margin:8,fontSize:15},children:"SUBMIT"})]}),Object(h.jsxs)("form",{id:"secondPlayerName",onSubmit:function(e){e.preventDefault();var t=e.target[0].value;0===t.length?s(1):(s(2),u({type:"SET_PLAYER_2_NAME",data:t}))},children:[b[l],Object(h.jsx)(d.a,{variant:"outlined",type:"submit",value:"Submit",color:"primary",style:{margin:8,fontSize:15},children:"SUBMIT"})]}),Object(h.jsx)("br",{}),Object(h.jsx)(d.a,{id:"submit",color:"primary",variant:"outlined",onClick:function(){u({type:"START_ENTIRE_GAME"})},style:{margin:20,fontSize:20,fontWeight:"bold"},children:"START GAME!"})]})})},N=r(117),D=Object(l.a)({root:{minWidth:275,backgroundColor:"beige",margin:5,width:"100%",height:"100%"},title:{fontWeight:"bold",textAlign:"center"},surrendered:{color:"red",fontWeight:"bold",textAlign:"center"},msg:{color:"gray",fontStyle:"italic",textAlign:"center",fontSize:"15px"}});function I(e){var t=D();return Object(h.jsx)(j.a,{className:t.root,children:Object(h.jsxs)(N.a,{children:[Object(h.jsxs)(O.a,{className:t.title,color:"textSecondary",children:[e.playerInfo.name,"'s Score:"]}),Object(h.jsx)("hr",{}),Object(h.jsxs)(O.a,{variant:"body2",component:"p",children:[e.playerInfo.surrendered?Object(h.jsx)(O.a,{className:t.surrendered,children:"SURRENDERED"}):"",null===e.playerInfo.currScore?Object(h.jsx)(O.a,{className:t.msg,children:"hasn't played as the Guesser yet..."}):Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"BASE SCORE:"}),Object(h.jsx)("td",{children:e.playerInfo.currScore[0]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"REWARD POINTS:"}),Object(h.jsx)("td",{children:e.playerInfo.currScore[1]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"PENALTY:"}),Object(h.jsx)("td",{children:e.playerInfo.currScore[2]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"COMPENSATION:"}),Object(h.jsx)("td",{children:e.playerInfo.currScore[3]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"ROUND TOTAL:"}),Object(h.jsx)("td",{children:e.playerInfo.currScore[4]})]}),Object(h.jsx)("br",{})]}),Object(h.jsx)("table",{children:Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[" ",Object(h.jsx)("b",{children:"CUM. TOTAL:"})," "]}),Object(h.jsx)("td",{children:e.playerInfo.score})]})})]})]})})}var w=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.roundCountReducer})),r=Object(o.c)((function(e){return e.maxRoundCountReducer})),n=function(){e({type:"RESET_CORRECT_GUESSES"}),e({type:"RESET_FALSE_GUESSES"}),e({type:"RESET_HINT_COUNT"}),e({type:"RESET_FALSE_INPUT_COUNT"})};return Object(h.jsxs)("form",{onSubmit:function(c){if(c.preventDefault(),i=c.target[0].value,/[^a-zA-Z]/.test(i)||i.length<3)window.alert("[NOT ACCEPTED] Please enter a valid English word that is longer than 3 characters.");else{var a=c.target[0].value;e({type:"SET_CORRECT_WORD",newWord:a.toUpperCase()}),e(m(function(e){for(var t=[],r=0;r<e.length;r++)t+=["_"];return t}(a))),e({type:"UPDATE_ROUND_COUNT"}),e(t%2===0?{type:"SWITCH_PLAYERS"}:{type:"SWITCH_PLAYERS_FULL_ROUND"}),t===r&&e({type:"CONCLUDE"}),n(),e(E("i"))}var i},children:[Object(h.jsx)(_.a,{id:"standard-basic",variant:"outlined",label:"Enter a word here...",color:"primary",style:{margin:8}}),Object(h.jsx)(d.a,{type:"submit",value:"Submit",color:"primary",style:{marginTop:20,fontSize:15},children:"SUBMIT"})]})};var L=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.roundCountReducer})),r=Object(o.c)((function(e){return e.correctWordReducer})),n=Object(o.c)((function(e){return e.playersReducer})),c=Object(o.c)((function(e){return e.endGameReducer}));return Object(h.jsx)("div",{style:{height:"auto",width:"auto",position:"absolute",backgroundColor:"rgba(191, 236, 255, 0.98)",display:"flex",left:0,right:0,top:0,bottom:0,zIndex:4,alignItems:"center",justifyContent:"center",fontStyle:"italic",fontSize:25,fontWeight:"bold",color:"rgb(6, 54, 55)",textAlign:"center"},children:Object(h.jsxs)("div",{children:[1!==t?Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{style:{fontSize:15,margin:0},children:"CORRECT WORD:"}),Object(h.jsx)(j.a,{children:r})]}),Object(h.jsxs)("div",{style:{alignItems:"center",display:"flex"},children:[Object(h.jsx)(I,{playerInfo:n[0]}),Object(h.jsx)(I,{playerInfo:n[1]})]})]}):null,c?Object(h.jsxs)("div",{children:[function(){var e=n[0].score,t=n[1].score;return e>t?Object(h.jsxs)("div",{style:{textDecoration:"underline",fontStyle:"noraml",color:"forestgreen"},children:[Object(h.jsx)("br",{}),n[0].name," won, Congrats!"]}):e<t?Object(h.jsxs)("div",{style:{textDecoration:"underline",fontStyle:"noraml",color:"forestgreen"},children:[Object(h.jsx)("br",{}),n[1].name," won, Congrats!"]}):Object(h.jsxs)("div",{style:{textDecoration:"underline",fontStyle:"noraml",color:"forestgreen"},children:[Object(h.jsx)("br",{}),"A tie was reached. Congrats to both parties!"]})}(),Object(h.jsx)(d.a,{style:{margin:10,fontSize:15},onClick:function(){e({type:"RESET_PLAYER_DATA"})},children:"START A NEW GAME"})]}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{style:{fontWeight:"bold",fontStyle:"normal",fontSize:18,marginTop:15,marginBottom:5},children:[n[0].name,", please enter a word:"]}),Object(h.jsxs)("div",{style:{fontWeight:"lightre",fontStyle:"normal",fontSize:15,opacity:.5},children:[n[1].name,", please look away..."]}),Object(h.jsx)(w,{})]})]})})},P=r(41),G=Object(l.a)((function(e){return{root:{width:P.auto,height:P.auto,flexGrow:2,backgroundColor:"rgb(155, 210, 210)",maxWidth:1e3,position:"relative"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,margin:3,height:200}}}));function W(){var e=G(),t=Object(o.b)(),r=Object(o.c)((function(e){return e.playersReducer})),n=Object(o.c)((function(e){return e.roundCountReducer})),c=Object(o.c)((function(e){return e.entireGameStartedReducer})),a=Object(o.c)((function(e){return e.roundStateReducer})),i=Object(o.c)((function(e){return e.maxRoundCountReducer})),l=function(){t(S(0)),t(p([0,0,0,0,0]))};return Object(h.jsxs)("div",{className:e.root,children:[c?"":Object(h.jsx)(U,{}),"e"===a?Object(h.jsx)(L,{}):"",Object(h.jsxs)(u.a,{container:!0,children:[Object(h.jsxs)(u.a,{item:!0,xs:3,children:[Object(h.jsx)("h1",{style:{fontStyle:"italic",textDecoration:"underline overline",marginLeft:20,display:"flex",opacity:"0.5"},children:"H a n g-m a n!!!"}),Object(h.jsx)(d.a,{color:"primary",children:"RULES"}),Object(h.jsx)(d.a,{color:"primary",children:"CHANGE MAX ROUNDS"})]}),Object(h.jsx)(u.a,{item:!0,xs:5,children:Object(h.jsx)("div",{style:{display:"flex",maxHeight:"70%",marginLeft:20,marginRight:20,marginTop:5,justifyContent:"center",alignItems:"center",backgroundColor:"rgb(135, 190, 190)",borderRadius:10},children:Object(h.jsxs)("h1",{style:{fontStyle:"italic",marginLeft:10,display:"flex",fontSize:40},children:["Round ",n<=2?1:Math.floor(n/2),Object(h.jsxs)("h1",{style:{fontSize:20,opacity:".5"},children:[" / ",i/2]})]})})}),Object(h.jsx)(u.a,{item:!0,xs:4,children:Object(h.jsx)(g,{playerInfo:r[1],role:"Executor"})}),Object(h.jsx)(u.a,{item:!0,xs:4,children:Object(h.jsxs)(s.a,{className:e.paper,children:["HINT ",Object(h.jsx)("br",{}),"(under construction)"]})}),Object(h.jsx)(u.a,{item:!0,xs:8,children:Object(h.jsx)(y,{})}),Object(h.jsxs)(u.a,{item:!0,xs:4,children:[Object(h.jsx)(g,{playerInfo:r[0],role:"Guesser"}),Object(h.jsx)(C,{}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{style:{alignItems:"center",display:"flex"},children:[Object(h.jsx)("div",{style:{marginLeft:7},children:Object(h.jsx)(d.a,{variant:"contained",color:"secondary",onClick:function(){t({type:"GUESSER_SURRENDERS"}),t(E("e")),l()},children:"SURRENDER"})}),Object(h.jsx)("div",{style:{marginLeft:7},children:Object(h.jsx)(d.a,{variant:"contained",color:"primary",children:"TIPS"})})]})]}),Object(h.jsx)(u.a,{item:!0,xs:8,children:Object(h.jsx)(T,{})})]})]})}var k=function(){return Object(o.b)(),Object(o.c)((function(e){return e.playersReducer})),Object(o.c)((function(e){return e.tipToggleReducer})),Object(o.c)((function(e){return e.correctWordReducer})),Object(h.jsx)("div",{children:Object(h.jsx)(W,{})})},M=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,122)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),c(e),a(e),i(e)}))},z=r(35),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CORRECT_GUESSES":return e.concat(t.data);case"RESET_CORRECT_GUESSES":return[];default:return e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CORRECT_WORD":return t.newWord;default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONCLUDE":return!0;default:return e}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_ENTIRE_GAME":return!0;default:return e}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FALSE_GUESSES":return e.concat(t.data);case"RESET_FALSE_GUESSES":return[];default:return e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FALSE_INPUT_COUNT":return e+1;case"RESET_FALSE_INPUT_COUNT":return 0;default:return e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_HINT_COUNT":return e+1;case"RESET_HINT_COUNT":return 0;default:return e}},V=r(25),q=[{key:0,name:"Cat",avatar:"https://freepngimg.com/thumb/painting/84774-square-art-pixel-rectangle-cat-hd-image-free-png.png",score:0,currScore:null,surrendered:!1},{key:1,name:"Dog",avatar:"https://freepngimg.com/thumb/technology/86267-flowey-square-angle-dog-undertale-free-photo-png.png",score:0,currScore:null,surrendered:!1}],Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SCORE_TO_GUESSER":var r=Object(V.a)(e);return r[0].score+=t.data,r;case"SWITCH_PLAYERS":var n=e[0];return[c=e[1],n];case"SWITCH_PLAYERS_FULL_ROUND":var c;return(n=e[0]).surrendered=!1,n.currScore=null,(c=e[1]).surrendered=!1,c.currScore=null,[c,n];case"RESET_PLAYER_DATA":var a=q;return a[0].name=e[0].name,a[1].name=e[1].name,a;case"SET_PLAYER_1_NAME":var i=Object(V.a)(e);return i[0].name=t.data,i;case"SET_PLAYER_2_NAME":var o=Object(V.a)(e);return o[1].name=t.data,o;case"UPDATE_CURRENT_SCORE_CALCULATION":var l=Object(V.a)(e);return l[0].currScore=t.data,l;case"GUESSER_SURRENDERS":var s=Object(V.a)(e);return s[0].surrendered=!0,s;default:return e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ROUND_COUNT":return e+1;default:return e}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"e",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ROUND_STATE":return t.data;default:return e}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SURRENDERED":return!0;default:return e}},te=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_TIPS":default:return!e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_WORD_BOARD":return t.data;default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_MAX_ROUND_COUNT":return t.data;default:return e}},ce=Object(z.a)({correctGuessesReducer:F,correctWordReducer:H,endGameReducer:B,entireGameStartedReducer:Y,falseGuessesReducer:X,falseInputCountReducer:J,hintCountReducer:K,playersReducer:Z,roundCountReducer:Q,roundStateReducer:$,surrenderedReducer:ee,tipToggleReducer:te,wordBoardReducer:re,maxRoundCountReducer:ne}),ae=Object(z.b)(ce,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(o.a,{store:ae,children:Object(h.jsx)(k,{})})}),document.getElementById("root")),M()}},[[78,1,2]]]);
//# sourceMappingURL=main.4891c568.chunk.js.map