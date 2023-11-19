function indexOfIgnoreCase(s1, s2) {
  // write your code here

	let ss1=s1.toLowerCase();
	let ss2=s2.toLowerCase();
	
	let n1=s1.length;
	let n2=s2.length;

	for(let i=0;i<n1;i++)
		{
			let j=i+n2;
			let s=ss1.substring(i,j);
  
			if(s==ss2) 
			{
				return i;
			}
		}

	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
