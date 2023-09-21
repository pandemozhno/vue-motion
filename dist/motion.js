const d = {
  "fade-in": {
    opacity: [0, 1]
  },
  "fade-out": {
    opacity: [1, 0]
  },
  "slide-down": {
    transform: ["translateY(-50%)", "translateY(0)"]
  },
  "hi-there": {
    offset: [0.3, 0.4, 0.5, 0.6, 0.7, 1],
    transform: ["scale(1.2)", "rotate(-20deg) scale(1.2)", "rotate(20deg) scale(1.2)", "rotate(-20deg) scale(1.2)", "rotate(0deg) scale(1.2)", "scale(1)"]
  }
}, m = (n) => {
  let o = [];
  return n.forEach((e) => {
    d[e] && o.push(d[e]);
  }), o;
}, p = (n) => {
  let o = {
    delay: 0,
    direction: "normal",
    duration: 0,
    easing: "linear",
    endDelay: 0,
    fill: "none",
    iterationStart: 0,
    iterations: 1,
    composite: "replace",
    iterationComposite: "replace",
    pseudoElement: void 0,
    id: Date.now(),
    rangeEnd: void 0,
    rangeStart: void 0,
    timeline: new DocumentTimeline()
  };
  for (let e in n)
    o.hasOwnProperty(e) && (o[e] = n[e] || o[e]);
  return o;
}, u = (n, o) => {
  const e = new Array(o);
  for (var t = 0; t < o; t++) {
    e[t] = {};
    for (var r in n)
      Array.isArray(n[r]) ? e[t][r] = n[r][t] || null : e[t][r] = n[r];
    e[t] = p(e[t]);
  }
  return e;
}, v = {
  created(n, { arg: o, value: e, modifiers: t }, r, a) {
    if (e.name === void 0)
      return;
    const i = e.name.split(" ");
    let s = m(i);
    const l = u(e, i.length);
    s.forEach((c, f) => {
      n.animate(c, l[f]).pause();
    });
  },
  beforeMount(n, o, e, t) {
  },
  mounted(n, o, e, t) {
    console.log("vnode", e), n.getAnimations().forEach((a) => {
      a.ready.then((s) => {
        console.log("ap", s), a.currentTime = 0, a.play();
      });
    });
  },
  beforeUpdate(n, o, e, t) {
  },
  updated(n, o, e, t) {
  },
  beforeUnmount(n, o, e, t) {
    console.log("ss", t), console.log("UNMOUNTED", e);
  },
  unmounted(n, o, e, t) {
  }
};
export {
  v as motion
};
