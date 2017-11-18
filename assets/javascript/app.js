function onSubmit(){
	var score=0;
	var numofQuestions = 5;
	var ansArr=['a', 'd', 'b', 'c', 'b'];

	var q1=document.forms['quiz']['q1'].value;
	var q2=document.forms['quiz']['q2'].value;
	var q3=document.forms['quiz']['q3'].value;
	var q4=document.forms['quiz']['q4'].value;
	var q5=document.forms['quiz']['q5'].value;

	for(var i = 1; i<=numofQuestions; i++){
		if(eval('q'+i) == ''){
			alert("YOU missed question number " + i);
		}

		for(var i=1; i <=numofQuestions; i++){
			if(eval('q' + i) == ansArr[i-1]){
				score++;
			}
		}

		var result = document.getElementById('results');
		results.innerHTML="<h2>YOU Scored " + score + "points out of" + numofQuestions + "</h2>"
		alert('You Scored ' + score + ' out of ' + numofQuestions);
	}
	
}