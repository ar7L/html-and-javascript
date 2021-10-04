const createStyle = document.createElement('style');

const rstyles = document.querySelectorAll('.r-style');

for(let rs of rstyles){
	let classes = rs.className.split(' ');
	let classArray = [];
	for(let i = 1; i < classes.length; ++i){
		let props = classes[i].split('-');
		let c,bgc,fs,cl,g = false , d = false,flex = false , block = false ,jfc;
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
			d = true;
		}
		if(props[0] === 'jfc'){
			jfc = props[1];
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
			justify-content: ${jfc};

		}`
		if(d){
			g = (props[1]==='g')?true: false;
			flex = (props[1] === 'flex')?true:false;
			createStyle.innerHTML += `.${classes[i]} {
				display: ${g===true?'grid':(flex===true)?'flex':''};
			}`
		}
	}
}
document.getElementsByTagName('head')[0].appendChild(createStyle);

