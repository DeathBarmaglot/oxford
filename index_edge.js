/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='https://raw.githubusercontent.com/DeathBarmaglot/oxford/master/images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg',
                type: 'image',
                rect: ['0px', '-1px','300px','183px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.svg",'0px','0px']
            },
            {
                id: 'L',
                type: 'image',
                rect: ['89px', '0px','100px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"L.svg",'0px','0px']
            },
            {
                id: 'LCopy',
                type: 'image',
                rect: ['109px', '0px','100px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"L.svg",'0px','0px'],
                transform: [[],['180']]
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['30px', '-30px','240px','120px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['28px', '163px','240px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'xo2',
                type: 'image',
                rect: ['65px', '-10px','140px','80px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"xo2.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'xo2Copy',
                type: 'image',
                rect: ['80px', '-10px','140px','80px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"xo2.svg",'0px','0px'],
                transform: [[],[],[],['-0.5','0.5']]
            },
            {
                id: 'ox2Copy',
                type: 'image',
                rect: ['183px', '135px','140px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ox2.svg",'0px','0px'],
                transform: [[],[],[],['-0.5','0.5']]
            },
            {
                id: 'ox2',
                type: 'image',
                rect: ['-27px', '137px','140px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ox2.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'doc',
                type: 'image',
                rect: ['205px', '138px','120px','170px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"doc.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'right_flowers',
                type: 'image',
                rect: ['210px', '-35px','120px','140px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"right_flowers.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'left_flowers',
                type: 'image',
                rect: ['-42px', '37px','170px','190px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"left_flowers.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'k2',
                type: 'image',
                rect: ['-51px', '57px','280px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"k2.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'g2',
                type: 'image',
                rect: ['114px', '60px','220px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"g2.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'v2',
                type: 'image',
                rect: ['-46px', '78px','390px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"v2.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: '_2',
                type: 'image',
                rect: ['22px', '81px','30px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"%2B2.svg",'0px','0px'],
                transform: [[],[],[],['0.45','0.45']]
            },
            {
                id: '_22',
                type: 'image',
                rect: ['84px', '114px','30px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"%3D2.svg",'0px','0px'],
                transform: [[],[],[],['0.45','0.45']]
            },
            {
                id: '_52',
                type: 'image',
                rect: ['80px', '90px','140px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"52.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'd1',
                type: 'image',
                rect: ['15px', '61px','180px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d1.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'd2',
                type: 'image',
                rect: ['30px', '89px','160px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d2.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'd3',
                type: 'image',
                rect: ['43px', '113px','140px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d3.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'p',
                type: 'image',
                rect: ['135px', '62px','100px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'w',
                type: 'image',
                rect: ['160px', '41px','100px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"w.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 't1',
                type: 'image',
                rect: ['37px', '68px','100px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t1.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 't1Copy',
                type: 'image',
                rect: ['159px', '68px','100px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t1.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 't2',
                type: 'image',
                rect: ['96px', '68px','100px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t2.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'a12',
                type: 'image',
                rect: ['-108px', '70px','520px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a12.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'a22',
                type: 'image',
                rect: ['-29px', '97px','370px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a22.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'a32',
                type: 'image',
                rect: ['-17px', '97px','340px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a32.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 's',
                type: 'image',
                rect: ['-121px', '-37px','540px','230px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"s.svg",'0px','0px'],
                transform: [[],[],[],['0.53','0.6']]
            },
            {
                id: 'li',
                type: 'image',
                rect: ['-92px', '149px','480px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"li.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__22}": [
                ["style", "top", '114px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '84px']
            ],
            "${__2}": [
                ["style", "top", '81px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.45'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.45'],
                ["style", "opacity", '0'],
                ["style", "left", '22px']
            ],
            "${__5}": [
                ["style", "top", '-30px'],
                ["style", "left", '-332px']
            ],
            "${_v}": [
                ["style", "top", '-30px'],
                ["style", "left", '-332px']
            ],
            "${_k}": [
                ["style", "top", '-30px'],
                ["style", "left", '-332px']
            ],
            "${_xo}": [
                ["style", "left", '431px'],
                ["style", "top", '36px']
            ],
            "${_t1Copy}": [
                ["style", "top", '68px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '159px']
            ],
            "${_d3}": [
                ["style", "top", '113px'],
                ["transform", "scaleY", '0.3'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '43px'],
                ["style", "background-position", [0,33.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_logo}": [
                ["style", "top", '-90px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '30px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_k2}": [
                ["style", "top", '57px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-51px'],
                ["style", "background-position", [0,41.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_t1}": [
                ["style", "top", '68px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '37px']
            ],
            "${_a12}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-108px']
            ],
            "${_L}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '180px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '89px'],
                ["style", "width", '100px']
            ],
            "${_li}": [
                ["style", "top", '149px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-92px']
            ],
            "${_g}": [
                ["style", "top", '-30px'],
                ["style", "left", '-332px']
            ],
            "${_ox2}": [
                ["style", "top", '137px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '77px']
            ],
            "${__52}": [
                ["style", "top", '90px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '80px'],
                ["style", "background-position", [0,69.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_g2}": [
                ["style", "top", '60px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '114px'],
                ["style", "background-position", [0,29.3330078125], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_d2}": [
                ["style", "top", '89px'],
                ["transform", "scaleY", '0.3'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '30px'],
                ["style", "background-position", [0,33.33349609375], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_a22}": [
                ["style", "top", '97px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-29px']
            ],
            "${_s}": [
                ["style", "top", '-37px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.53'],
                ["style", "opacity", '0'],
                ["style", "left", '-121px']
            ],
            "${_LCopy}": [
                ["style", "top", '0px'],
                ["style", "height", '180px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '109px'],
                ["style", "width", '100px']
            ],
            "${_a2}": [
                ["style", "left", '389px'],
                ["style", "top", '112px']
            ],
            "${_a1}": [
                ["style", "left", '389px'],
                ["style", "top", '112px']
            ],
            "${_w}": [
                ["style", "top", '41px'],
                ["transform", "scaleY", '0'],
                ["style", "background-position", [-82.666015625,60], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '160px']
            ],
            "${_ox2Copy}": [
                ["style", "top", '135px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '-0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '60px']
            ],
            "${_Image}": [
                ["style", "top", '-30px'],
                ["style", "left", '-332px']
            ],
            "${_doc}": [
                ["style", "top", '138px'],
                ["transform", "scaleY", '0.5'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '205px']
            ],
            "${_p}": [
                ["style", "top", '62px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '135px'],
                ["style", "background-position", [-47.999999625,42.66650390625], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Image2}": [
                ["style", "top", '-30px'],
                ["style", "left", '-332px']
            ],
            "${_xo2Copy}": [
                ["style", "top", '-10px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '-0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '80px']
            ],
            "${_a32}": [
                ["style", "top", '97px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-17px']
            ],
            "${_d1}": [
                ["style", "top", '61px'],
                ["transform", "scaleY", '0.3'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '15px'],
                ["style", "background-position", [0,40], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_v2}": [
                ["style", "top", '78px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-46px'],
                ["style", "background-position", [0,40], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_right_flowers}": [
                ["style", "top", '-35px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '210px']
            ],
            "${_bg}": [
                ["style", "top", '-1px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '183px'],
                ["style", "left", '0px'],
                ["style", "width", '300px']
            ],
            "${_t}": [
                ["style", "top", '163px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '28px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_a3}": [
                ["style", "left", '389px'],
                ["style", "top", '112px']
            ],
            "${_xo2}": [
                ["style", "top", '-10px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '65px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_ox}": [
                ["style", "left", '431px'],
                ["style", "top", '36px']
            ],
            "${_t2}": [
                ["style", "top", '68px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '96px']
            ],
            "${_left_flowers}": [
                ["style", "top", '37px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-42px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 19500,
            autoPlay: true,
            timeline: [
                { id: "eid38", tween: [ "style", "${_ox2Copy}", "opacity", '1', { fromValue: '0'}], position: 1037, duration: 589, easing: "easeInOutCubic" },
                { id: "eid234", tween: [ "style", "${_ox2Copy}", "opacity", '0', { fromValue: '1'}], position: 17060, duration: 440, easing: "easeInOutCubic" },
                { id: "eid12", tween: [ "style", "${_LCopy}", "left", '200px', { fromValue: '109px'}], position: 603, duration: 845, easing: "easeInOutCubic" },
                { id: "eid238", tween: [ "style", "${_LCopy}", "left", '300px', { fromValue: '200px'}], position: 17060, duration: 440, easing: "easeInOutCubic" },
                { id: "eid11", tween: [ "style", "${_L}", "opacity", '1', { fromValue: '0'}], position: 859, duration: 589, easing: "easeInOutCubic" },
                { id: "eid237", tween: [ "style", "${_L}", "opacity", '0', { fromValue: '1'}], position: 17060, duration: 440, easing: "easeInOutCubic" },
                { id: "eid52", tween: [ "style", "${_Image2}", "top", '-39px', { fromValue: '-30px'}], position: 1000, duration: 325, easing: "easeInOutCubic" },
                { id: "eid186", tween: [ "style", "${_t1Copy}", "opacity", '1', { fromValue: '0'}], position: 12700, duration: 316, easing: "easeInOutCubic" },
                { id: "eid190", tween: [ "style", "${_t1Copy}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 250, easing: "easeInOutCubic" },
                { id: "eid175", tween: [ "transform", "${_t1}", "scaleX", '0.5', { fromValue: '0'}], position: 11407, duration: 548, easing: "easeInOutCubic" },
                { id: "eid27", tween: [ "style", "${_doc}", "top", '54px', { fromValue: '138px'}], position: 781, duration: 845, easing: "easeInOutCubic" },
                { id: "eid128", tween: [ "style", "${_w}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-82.666015625,60]}], position: 9607, duration: 583, easing: "easeInOutCubic" },
                { id: "eid129", tween: [ "style", "${_w}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-82.666015625,60]}], position: 10190, duration: 455, easing: "easeInOutCubic" },
                { id: "eid130", tween: [ "style", "${_w}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-82.666015625,60]}], position: 10795, duration: 455, easing: "easeInOutCubic" },
                { id: "eid71", tween: [ "style", "${_g2}", "opacity", '1', { fromValue: '0'}], position: 3400, duration: 530, easing: "easeInOutCubic" },
                { id: "eid49", tween: [ "style", "${_Image}", "left", '-345px', { fromValue: '-332px'}], position: 1000, duration: 325, easing: "easeInOutCubic" },
                { id: "eid75", tween: [ "style", "${_v2}", "opacity", '1', { fromValue: '0'}], position: 3824, duration: 530, easing: "easeInOutCubic" },
                { id: "eid139", tween: [ "transform", "${_w}", "scaleY", '0.5', { fromValue: '0'}], position: 9607, duration: 323, easing: "easeInOutCubic" },
                { id: "eid141", tween: [ "transform", "${_w}", "scaleY", '0.5', { fromValue: '0'}], position: 10260, duration: 253, easing: "easeInOutCubic" },
                { id: "eid143", tween: [ "transform", "${_w}", "scaleY", '0.5', { fromValue: '0'}], position: 10879, duration: 253, easing: "easeInOutCubic" },
                { id: "eid174", tween: [ "transform", "${_t1}", "scaleY", '0.5', { fromValue: '0'}], position: 11407, duration: 548, easing: "easeInOutCubic" },
                { id: "eid69", tween: [ "style", "${_g2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,29.3330078125]}], position: 2976, duration: 954, easing: "easeInOutCubic" },
                { id: "eid114", tween: [ "style", "${_g2}", "background-position", [0,-29.3330078125], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0.000000,0.000000]}], position: 6721, duration: 938, easing: "easeInOutCubic" },
                { id: "eid148", tween: [ "transform", "${_d1}", "scaleY", '0.5', { fromValue: '0.3'}], position: 7952, duration: 386, easing: "easeInOutCubic" },
                { id: "eid30", tween: [ "style", "${_xo2}", "opacity", '1', { fromValue: '0'}], position: 1037, duration: 589, easing: "easeInOutCubic" },
                { id: "eid233", tween: [ "style", "${_xo2}", "opacity", '0', { fromValue: '1'}], position: 17060, duration: 440, easing: "easeInOutCubic" },
                { id: "eid67", tween: [ "style", "${_k2}", "opacity", '1', { fromValue: '0'}], position: 3072, duration: 530, easing: "easeInOutCubic" },
                { id: "eid118", tween: [ "style", "${__22}", "background-position", [0,-32.5927734375], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 7035, duration: 881, easing: "easeInOutCubic" },
                { id: "eid132", tween: [ "style", "${_p}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-47.999999625,42.66650390625]}], position: 9607, duration: 584, easing: "easeInOutCubic" },
                { id: "eid79", tween: [ "transform", "${__22}", "scaleY", '0.45', { fromValue: '0'}], position: 4035, duration: 458, easing: "easeInOutCubic" },
                { id: "eid85", tween: [ "style", "${__52}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,69.33349609375]}], position: 4285, duration: 442, easing: "easeInOutCubic" },
                { id: "eid120", tween: [ "style", "${__52}", "background-position", [0,-73.33349609375], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 7035, duration: 881, easing: "easeInOutCubic" },
                { id: "eid253", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 186, duration: 314, easing: "easeInOutCubic" },
                { id: "eid152", tween: [ "transform", "${_d2}", "scaleY", '0.5', { fromValue: '0.3'}], position: 8338, duration: 386, easing: "easeInOutCubic" },
                { id: "eid24", tween: [ "style", "${_xo}", "top", '0px', { fromValue: '36px'}], position: 500, duration: 330, easing: "easeInOutCubic" },
                { id: "eid37", tween: [ "style", "${_ox2Copy}", "left", '183px', { fromValue: '60px'}], position: 781, duration: 845, easing: "easeInOutCubic" },
                { id: "eid194", tween: [ "style", "${_a1}", "top", '94px', { fromValue: '112px'}], position: 14250, duration: 403, easing: "easeOutCubic" },
                { id: "eid181", tween: [ "transform", "${_t1Copy}", "scaleY", '0.5', { fromValue: '0'}], position: 12503, duration: 548, easing: "easeInOutCubic" },
                { id: "eid82", tween: [ "transform", "${__2}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 3576, duration: 294, easing: "easeInOutCubic" },
                { id: "eid53", tween: [ "style", "${__5}", "left", '-395px', { fromValue: '-332px'}], position: 1000, duration: 325, easing: "easeInOutCubic" },
                { id: "eid48", tween: [ "style", "${_v}", "top", '-48px', { fromValue: '-30px'}], position: 1000, duration: 325, easing: "easeInOutCubic" },
                { id: "eid155", tween: [ "transform", "${_d3}", "scaleY", '0.5', { fromValue: '0.3'}], position: 8724, duration: 386, easing: "easeInOutCubic" },
                { id: "eid252", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 186, duration: 314, easing: "easeInOutCubic" },
                { id: "eid245", tween: [ "style", "${_li}", "opacity", '1', { fromValue: '0'}], position: 17500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid248", tween: [ "style", "${_li}", "opacity", '0', { fromValue: '1'}], position: 19000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid33", tween: [ "style", "${_xo2Copy}", "opacity", '1', { fromValue: '0'}], position: 1037, duration: 589, easing: "easeInOutCubic" },
                { id: "eid232", tween: [ "style", "${_xo2Copy}", "opacity", '0', { fromValue: '1'}], position: 17060, duration: 440, easing: "easeInOutCubic" },
                { id: "eid231", tween: [ "style", "${_t}", "background-position", [0,77.3330078125], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 17060, duration: 440, easing: "easeInOutCubic" },
                { id: "eid218", tween: [ "style", "${_a12}", "opacity", '1', { fromValue: '0'}], position: 14750, duration: 390, easing: "easeInOutCubic" },
                { id: "eid226", tween: [ "style", "${_a12}", "opacity", '0', { fromValue: '1'}], position: 17060, duration: 440, easing: "easeInOutCubic" },
                { id: "eid156", tween: [ "style", "${_d3}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,33.33349609375]}], position: 8338, duration: 1035, easing: "easeInOutCubic" },
                { id: "eid215", tween: [ "style", "${_a22}", "opacity", '1', { fromValue: '0'}], position: 14750, duration: 390, easing: "easeInOutCubic" },
                { id: "eid222", tween: [ "style", "${_a22}", "opacity", '0', { fromValue: '1'}], position: 16000, duration: 250, easing: "easeInOutCubic" },
                { id: "eid22", tween: [ "style", "${_t}", "top", '128px', { fromValue: '163px'}], position: 0, duration: 775, easing: "easeInOutCubic" },
                { id: "eid150", tween: [ "style", "${_d2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,33.33349609375]}], position: 7952, duration: 1035, easing: "easeInOutCubic" },
                { id: "eid255", tween: [ "style", "${_p}", "opacity", '1', { fromValue: '0'}], position: 9607, duration: 293, easing: "easeInOutCubic" },
                { id: "eid171", tween: [ "style", "${_p}", "opacity", '0', { fromValue: '1'}], position: 11407, duration: 224, easing: "easeInOutCubic" },
                { id: "eid13", tween: [ "style", "${_L}", "left", '0px', { fromValue: '89px'}], position: 603, duration: 845, easing: "easeInOutCubic" },
                { id: "eid236", tween: [ "style", "${_L}", "left", '-100px', { fromValue: '0px'}], position: 17060, duration: 440, easing: "easeInOutCubic" },
                { id: "eid138", tween: [ "style", "${_d1}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,40]}], position: 7659, duration: 972, easing: "easeInOutCubic" },
                { id: "eid65", tween: [ "style", "${_k2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,41.33349609375]}], position: 2648, duration: 954, easing: "easeInOutCubic" },
                { id: "eid115", tween: [ "style", "${_k2}", "background-position", [0,-37.33349609375], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 6607, duration: 938, easing: "easeInOutCubic" },
                { id: "eid212", tween: [ "style", "${_a32}", "opacity", '1', { fromValue: '0'}], position: 16140, duration: 221, easing: "easeInOutCubic" },
                { id: "eid227", tween: [ "style", "${_a32}", "opacity", '0', { fromValue: '1'}], position: 17060, duration: 440, easing: "easeInOutCubic" },
                { id: "eid83", tween: [ "style", "${__2}", "opacity", '1', { fromValue: '0'}], position: 3653, duration: 158, easing: "easeInOutCubic" },
                { id: "eid140", tween: [ "transform", "${_w}", "scaleX", '0.5', { fromValue: '0'}], position: 9607, duration: 323, easing: "easeInOutCubic" },
                { id: "eid142", tween: [ "transform", "${_w}", "scaleX", '0.5', { fromValue: '0'}], position: 10260, duration: 253, easing: "easeInOutCubic" },
                { id: "eid144", tween: [ "transform", "${_w}", "scaleX", '0.5', { fromValue: '0'}], position: 10879, duration: 253, easing: "easeInOutCubic" },
                { id: "eid36", tween: [ "style", "${_ox2}", "opacity", '1', { fromValue: '0'}], position: 1037, duration: 589, easing: "easeInOutCubic" },
                { id: "eid235", tween: [ "style", "${_ox2}", "opacity", '0', { fromValue: '1'}], position: 17060, duration: 440, easing: "easeInOutCubic" },
                { id: "eid240", tween: [ "style", "${_doc}", "background-position", [0,176], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 11500, duration: 364, easing: "easeInOutCubic" },
                { id: "eid183", tween: [ "style", "${_t1}", "opacity", '1', { fromValue: '0'}], position: 11604, duration: 316, easing: "easeInOutCubic" },
                { id: "eid191", tween: [ "style", "${_t1}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 250, easing: "easeInOutCubic" },
                { id: "eid180", tween: [ "transform", "${_t1Copy}", "scaleX", '0.5', { fromValue: '0'}], position: 12503, duration: 548, easing: "easeInOutCubic" },
                { id: "eid51", tween: [ "style", "${_Image2}", "left", '-345px', { fromValue: '-332px'}], position: 1000, duration: 325, easing: "easeInOutCubic" },
                { id: "eid43", tween: [ "style", "${_k}", "left", '-458px', { fromValue: '-332px'}], position: 1000, duration: 325, easing: "easeInOutCubic" },
                { id: "eid196", tween: [ "style", "${_a2}", "top", '94px', { fromValue: '112px'}], position: 14250, duration: 403, easing: "easeOutCubic" },
                { id: "eid184", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0'}], position: 12152, duration: 316, easing: "easeInOutCubic" },
                { id: "eid192", tween: [ "style", "${_t2}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 250, easing: "easeInOutCubic" },
                { id: "eid195", tween: [ "style", "${_a2}", "left", '223px', { fromValue: '389px'}], position: 14250, duration: 403, easing: "easeOutCubic" },
                { id: "eid198", tween: [ "style", "${_a3}", "top", '94px', { fromValue: '112px'}], position: 14250, duration: 403, easing: "easeOutCubic" },
                { id: "eid256", tween: [ "style", "${_w}", "opacity", '1', { fromValue: '0'}], position: 9857, duration: 293, easing: "easeInOutCubic" },
                { id: "eid257", tween: [ "style", "${_w}", "opacity", '1', { fromValue: '0'}], position: 10357, duration: 229, easing: "easeInOutCubic" },
                { id: "eid258", tween: [ "style", "${_w}", "opacity", '1', { fromValue: '0'}], position: 11021, duration: 229, easing: "easeInOutCubic" },
                { id: "eid170", tween: [ "style", "${_w}", "opacity", '0', { fromValue: '1'}], position: 11407, duration: 224, easing: "easeInOutCubic" },
                { id: "eid197", tween: [ "style", "${_a3}", "left", '236px', { fromValue: '389px'}], position: 14250, duration: 403, easing: "easeOutCubic" },
                { id: "eid47", tween: [ "style", "${_v}", "left", '-507px', { fromValue: '-332px'}], position: 1000, duration: 325, easing: "easeInOutCubic" },
                { id: "eid35", tween: [ "style", "${_ox2}", "left", '-27px', { fromValue: '77px'}], position: 781, duration: 845, easing: "easeInOutCubic" },
                { id: "eid230", tween: [ "style", "${_logo}", "background-position", [0,-121.33349609375], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 17060, duration: 440, easing: "easeInOutCubic" },
                { id: "eid193", tween: [ "style", "${_a1}", "left", '155px', { fromValue: '389px'}], position: 14250, duration: 403, easing: "easeOutCubic" },
                { id: "eid178", tween: [ "transform", "${_t2}", "scaleY", '0.5', { fromValue: '0'}], position: 11955, duration: 548, easing: "easeInOutCubic" },
                { id: "eid25", tween: [ "style", "${_ox}", "left", '368px', { fromValue: '431px'}], position: 500, duration: 330, easing: "easeInOutCubic" },
                { id: "eid3", tween: [ "style", "${_logo}", "top", '-34px', { fromValue: '-90px'}], position: 0, duration: 775, easing: "easeInOutCubic" },
                { id: "eid179", tween: [ "transform", "${_t2}", "scaleX", '0.5', { fromValue: '0'}], position: 11955, duration: 548, easing: "easeInOutCubic" },
                { id: "eid169", tween: [ "style", "${_d1}", "opacity", '0', { fromValue: '1'}], position: 11407, duration: 224, easing: "easeInOutCubic" },
                { id: "eid168", tween: [ "style", "${_d3}", "opacity", '0', { fromValue: '1'}], position: 11407, duration: 224, easing: "easeInOutCubic" },
                { id: "eid54", tween: [ "style", "${__5}", "top", '-61px', { fromValue: '-30px'}], position: 1000, duration: 325, easing: "easeInOutCubic" },
                { id: "eid26", tween: [ "style", "${_ox}", "top", '14px', { fromValue: '36px'}], position: 500, duration: 330, easing: "easeInOutCubic" },
                { id: "eid167", tween: [ "style", "${_d2}", "opacity", '0', { fromValue: '1'}], position: 11407, duration: 224, easing: "easeInOutCubic" },
                { id: "eid44", tween: [ "style", "${_k}", "top", '-48px', { fromValue: '-30px'}], position: 1000, duration: 325, easing: "easeInOutCubic" },
                { id: "eid244", tween: [ "style", "${_s}", "opacity", '1', { fromValue: '0'}], position: 17500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid249", tween: [ "style", "${_s}", "opacity", '0', { fromValue: '1'}], position: 19000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid73", tween: [ "style", "${_v2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,40]}], position: 3400, duration: 954, easing: "easeInOutCubic" },
                { id: "eid116", tween: [ "style", "${_v2}", "background-position", [0,-38.66650390625], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0.000000,0.000000]}], position: 6938, duration: 881, easing: "easeInOutCubic" },
                { id: "eid147", tween: [ "transform", "${_d1}", "scaleX", '0.5', { fromValue: '0'}], position: 7952, duration: 386, easing: "easeInOutCubic" },
                { id: "eid50", tween: [ "style", "${_Image}", "top", '-43px', { fromValue: '-30px'}], position: 1000, duration: 325, easing: "easeInOutCubic" },
                { id: "eid9", tween: [ "style", "${_LCopy}", "opacity", '1', { fromValue: '0'}], position: 859, duration: 589, easing: "easeInOutCubic" },
                { id: "eid239", tween: [ "style", "${_LCopy}", "opacity", '0', { fromValue: '1'}], position: 17060, duration: 440, easing: "easeInOutCubic" },
                { id: "eid28", tween: [ "style", "${_doc}", "opacity", '1', { fromValue: '0'}], position: 1304, duration: 322, easing: "easeInOutCubic" },
                { id: "eid241", tween: [ "style", "${_doc}", "opacity", '0', { fromValue: '1'}], position: 11640, duration: 293, easing: "easeInOutCubic" },
                { id: "eid23", tween: [ "style", "${_xo}", "left", '368px', { fromValue: '431px'}], position: 500, duration: 330, easing: "easeInOutCubic" },
                { id: "eid154", tween: [ "transform", "${_d3}", "scaleX", '0.5', { fromValue: '0'}], position: 8724, duration: 386, easing: "easeInOutCubic" },
                { id: "eid41", tween: [ "style", "${_left_flowers}", "opacity", '1', { fromValue: '0'}], position: 775, duration: 475, easing: "easeInOutCubic" },
                { id: "eid228", tween: [ "style", "${_left_flowers}", "opacity", '0', { fromValue: '1'}], position: 17060, duration: 440, easing: "easeInOutCubic" },
                { id: "eid95", tween: [ "transform", "${__52}", "scaleX", '0.55', { fromValue: '0.5'}], position: 4838, duration: 289, easing: "easeInOutCubic" },
                { id: "eid97", tween: [ "transform", "${__52}", "scaleX", '0.55', { fromValue: '0.5'}], position: 5127, duration: 289, easing: "easeInOutCubic" },
                { id: "eid93", tween: [ "transform", "${__52}", "scaleX", '0.5', { fromValue: '0.55'}], position: 5535, duration: 465, easing: "easeInOutCubic" },
                { id: "eid151", tween: [ "transform", "${_d2}", "scaleX", '0.5', { fromValue: '0'}], position: 8338, duration: 386, easing: "easeInOutCubic" },
                { id: "eid46", tween: [ "style", "${_g}", "top", '-43px', { fromValue: '-30px'}], position: 1000, duration: 325, easing: "easeInOutCubic" },
                { id: "eid254", tween: [ "style", "${__52}", "opacity", '1', { fromValue: '0'}], position: 4535, duration: 192, easing: "easeInOutCubic" },
                { id: "eid34", tween: [ "style", "${_xo2Copy}", "left", '-24px', { fromValue: '80px'}], position: 781, duration: 845, easing: "easeInOutCubic" },
                { id: "eid42", tween: [ "style", "${_right_flowers}", "opacity", '1', { fromValue: '0'}], position: 775, duration: 475, easing: "easeInOutCubic" },
                { id: "eid229", tween: [ "style", "${_right_flowers}", "opacity", '0', { fromValue: '1'}], position: 17060, duration: 440, easing: "easeInOutCubic" },
                { id: "eid117", tween: [ "style", "${__2}", "background-position", [0,34.073893229167], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 6938, duration: 881, easing: "easeInOutCubic" },
                { id: "eid77", tween: [ "transform", "${__22}", "scaleX", '0.45', { fromValue: '0'}], position: 4035, duration: 458, easing: "easeInOutCubic" },
                { id: "eid31", tween: [ "style", "${_xo2}", "left", '188px', { fromValue: '65px'}], position: 781, duration: 845, easing: "easeInOutCubic" },
                { id: "eid94", tween: [ "transform", "${__52}", "scaleY", '0.55', { fromValue: '0.5'}], position: 4838, duration: 289, easing: "easeInOutCubic" },
                { id: "eid96", tween: [ "transform", "${__52}", "scaleY", '0.55', { fromValue: '0.5'}], position: 5127, duration: 289, easing: "easeInOutCubic" },
                { id: "eid92", tween: [ "transform", "${__52}", "scaleY", '0.5', { fromValue: '0.55'}], position: 5535, duration: 465, easing: "easeInOutCubic" },
                { id: "eid45", tween: [ "style", "${_g}", "left", '-431px', { fromValue: '-332px'}], position: 1000, duration: 325, easing: "easeInOutCubic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-368295");
