(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const s=a(89),{lightningChart:n,Themes:r,AxisTickStrategies:i,DashedLine:o,SolidFill:h,StipplePatterns:d}=s,l=n().ChartXY({theme:r[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Machine temperatures"),m=l.getTheme().examples;if(!m)throw new Error("Unofficial theme used");const c=l.getDefaultAxisX().setTickStrategy(i.Time),p=l.getDefaultAxisY().setTitle("Temperature °C").setTickStrategy(i.Numeric,(e=>e.setCursorFormatter((e=>`${e.toFixed(1)} °C`))));Promise.all([fetch(new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"examples/assets/0036/temperature.json").then((e=>e.json())),fetch(new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"examples/assets/0036/temperature2.json").then((e=>e.json()))]).then((([e,t])=>{const a=l.addLineSeries({dataPattern:{pattern:"ProgressiveX"}}).setName("Machine 1 temperature").add(e),s=l.addLineSeries({dataPattern:{pattern:"ProgressiveX"}}).setName("Machine 2 temperature").add(t);p.addConstantLine(!0).setValue(120).setStrokeStyle(new o({thickness:4,fillStyle:new h({color:m.badGoodColorPalette[0]}),pattern:d.Dashed,patternScale:4})).setMouseInteractions(!1),c.setInterval({start:Math.min(a.getXMin(),s.getXMin())-1e3,end:Math.max(a.getXMax(),s.getXMax())+1e3}),p.setInterval({start:0,end:Math.max(a.getYMax(),s.getYMax())+20})}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);