const createStyle = document.createElement('style');

const rstyles = document.querySelectorAll('.r-style');

for(let rs of rstyles){
	let classes = rs.className.split(' ');
	let classArray = [];
	for(let i = 1; i < classes.length; ++i){
		let props = classes[i].split('-');
		let c,bgc,fs,cl,g = false , d,flex = false , block = false ,jfc,gtc;
		if(props[0]==='c'){
			c = props[1];
		}
		if(props[0] === 'bgc'){
			bgc = props[1];
		}
		if(props[0] === 'fs'){
			fs = props[1];
		}
		if(props[0] === 'd'){
			d = props[1];

		}
		if(props[0] === 'jfc'){
			jfc = props[1].replace('_','-');
		}
		if(props[0] === 'gtc'){
			gtc = props[1];
			console.log(gtc);
		}
		let id = classArray.indexOf(classes[i]);
		if(id >= 0)continue;
		createStyle.innerHTML += `
		.${classes[i]} {
			color : #${c};
			color : ${c};
			background-color: #${bgc};
			background-color: ${bgc};
			font-size: ${fs};
			display: ${d};
			grid-template-columns: repeat(auto-fit,minmax(${gtc},1fr));
			justify-content: ${jfc};
		}`
	}
}
document.getElementsByTagName('head')[0].appendChild(createStyle);

