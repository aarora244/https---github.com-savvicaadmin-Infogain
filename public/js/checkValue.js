function alertCheckValueJS() {
		var featureid = document.getElementById("featureid").value;
		var schoolid=document.getElementById("schoolid").value;
		var checkValTeacher = document.getElementsByName('checkboxTeacher');
		var checkValStudent = document.getElementsByName('checkboxStudent');
		var checkValParent = document.getElementsByName('checkboxParent');
		var checkValPrincipal = document.getElementsByName('checkboxPrincipal');
		var checkValClassTeacher = document.getElementsByName('checkboxSubject Teacher');

		var checkValuesTeacher = '';
		var checkValuesStudent = '';
		var checkValuesParent = '';
		var checkValuesPrincipal = '';
		var checkValuesClassTeacher = '';
		var uncheckValue = '';

		var checkValuesTeacherArr = [];
		var checkValuesStudentArr = [];
		var checkValuesParentArr = [];
		var checkValuesPrincipalArr = [];
		var checkValuesClassTeacherArr = [];
		var unCheckValuesArr = [];
		var finalCheckValueArr = [];

		var no = 0;
		var no2 = 0;
		var no3 = 0;
		var no4 = 0;
		var no5 = 0;
		var no6 = 0;
		var number = 0;
		var checkValTeacher2 = document.getElementsByName('checkbox2Teacher');
		var checkValStudent2 = document.getElementsByName('checkbox2Student');
		var checkValParent2 = document.getElementsByName('checkbox2Parent');
		var checkValPrincipal2 = document
				.getElementsByName('checkbox2Principal');
		var checkValClassTeacher2 = document
				.getElementsByName('checkbox2Subject Teacher');

		var checkValuesTeacher2 = '';
		var checkValuesStudent2 = '';
		var checkValuesParent2 = '';
		var checkValuesPrincipal2 = '';
		var checkValuesClassTeacher2 = '';
		var uncheckValue2 = '';

		var checkValuesTeacherArr2 = [];
		var checkValuesStudentArr2 = [];
		var checkValuesParentArr2 = [];
		var checkValuesPrincipalArr2 = [];
		var checkValuesClassTeacherArr2 = [];
		var unCheckValuesArr2 = [];
		var finalCheckValueArr2 = [];

		var pno = 0;
		var pno2 = 0;
		var pno3 = 0;
		var pno4 = 0;
		var pno5 = 0;
		var pno6 = 0;
		var pnumber = 0;

		for (var i = 0; i <= checkValTeacher.length - 1; i++) {
			if (checkValTeacher[i].checked) {
				checkValuesTeacher = checkValTeacher[i].value;
				checkValuesTeacherArr[no] = checkValuesTeacher + '~' + 'Yes';
				no++;
			} else {
				uncheckValue = checkValTeacher[i].value;
				unCheckValuesArr[no6] = uncheckValue + '~' + 'No';
				no6++;
			}
		}
		for (var j = 0; j <= checkValStudent.length - 1; j++) {
			if (checkValStudent[j].checked) {
				checkValuesStudent = checkValStudent[j].value;
				checkValuesStudentArr[no2] = checkValuesStudent + '~' + 'Yes';
				no2++;
			} else {
				uncheckValue = checkValStudent[j].value;
				unCheckValuesArr[no6] = uncheckValue + '~' + 'No';
				no6++;
			}
		}
		for (var k = 0; k <= checkValParent.length - 1; k++) {
			if (checkValParent[k].checked) {
				checkValuesParent = checkValParent[k].value;
				checkValuesParentArr[no3] = checkValuesParent + '~' + 'Yes';
				no3++;
			} else {
				uncheckValue = checkValParent[k].value;
				unCheckValuesArr[no6] = uncheckValue + '~' + 'No';
				no6++;
			}
		}
		for (var l = 0; l <= checkValPrincipal.length - 1; l++) {
			if (checkValPrincipal[l].checked) {
				checkValuesPrincipal = checkValPrincipal[l].value;
				checkValuesPrincipalArr[no4] = checkValuesPrincipal + '~'
						+ 'Yes';
				no4++;
			} else {
				uncheckValue = checkValPrincipal[l].value;
				unCheckValuesArr[no6] = uncheckValue + '~' + 'No';
				no6++;
			}
		}
		for (var m = 0; m <= checkValClassTeacher.length - 1; m++) {
			if (checkValClassTeacher[m].checked) {
				checkValuesClassTeacher = checkValClassTeacher[m].value;

				checkValuesClassTeacherArr[no5] = checkValuesClassTeacher + '~'
						+ 'Yes';
				no5++;
			} else {
				uncheckValue = checkValClassTeacher[m].value;
				unCheckValuesArr[no6] = uncheckValue + '~' + 'No';
				no6++;
			}
		}
		if (checkValuesTeacherArr.length != 0)
		{
			finalCheckValueArr[number] = checkValuesTeacherArr;
			number++;
		}
		if (checkValuesStudentArr.length != 0)
		{
			finalCheckValueArr[number] = checkValuesStudentArr;
			number++;
		}
		if (checkValuesParentArr.length != 0)
		{
			finalCheckValueArr[number] = checkValuesParentArr;
			number++;
		}
		if (checkValuesPrincipalArr.length != 0)
		{
			finalCheckValueArr[number] = checkValuesPrincipalArr;
			number++;
		}
		if (checkValuesClassTeacherArr.length != 0)
		{
			finalCheckValueArr[number] = checkValuesClassTeacherArr;
			number++;
		}
		if (unCheckValuesArr.length != 0)
		{
			finalCheckValueArr[number] = unCheckValuesArr;
			number++;
		}
		for (var i = 0; i <= checkValTeacher2.length - 1; i++) {
			if (checkValTeacher2[i].checked) {
				checkValuesTeacher2 = checkValTeacher2[i].value;
				checkValuesTeacherArr2[pno] = checkValuesTeacher2 + '~' + 'Yes';
				pno++;
			} else {
				uncheckValue2 = checkValTeacher2[i].value;
				unCheckValuesArr2[pno6] = uncheckValue2 + '~' + 'No';
				pno6++;
			}
		}
		for (var j = 0; j <= checkValStudent2.length - 1; j++) {
			if (checkValStudent2[j].checked) {
				checkValuesStudent2 = checkValStudent2[j].value;
				checkValuesStudentArr2[pno2] = checkValuesStudent2 + '~'
						+ 'Yes';
				pno2++;
			} else {
				uncheckValue2 = checkValStudent2[j].value;
				unCheckValuesArr2[pno6] = uncheckValue2 + '~' + 'No';
				pno6++;
			}
		}
		for (var k = 0; k <= checkValParent2.length - 1; k++) {
			if (checkValParent2[k].checked) {
				checkValuesParent2 = checkValParent2[k].value;
				checkValuesParentArr2[pno3] = checkValuesParent2 + '~' + 'Yes';
				pno3++;
			} else {
				uncheckValue2 = checkValParent2[k].value;
				unCheckValuesArr2[pno6] = uncheckValue2 + '~' + 'No';
				pno6++;
			}
		}
		for (var l = 0; l <= checkValPrincipal2.length - 1; l++) {
			if (checkValPrincipal2[l].checked) {
				checkValuesPrincipal2 = checkValPrincipal2[l].value;
				checkValuesPrincipalArr2[pno4] = checkValuesPrincipal2 + '~'
						+ 'Yes';
				pno4++;
			} else {
				uncheckValue2 = checkValPrincipal2[l].value;
				unCheckValuesArr2[pno6] = uncheckValue2 + '~' + 'No';
				pno6++;
			}
		}
		for (var m = 0; m <= checkValClassTeacher2.length - 1; m++) {
			if (checkValClassTeacher2[m].checked) {
				checkValuesClassTeacher2 = checkValClassTeacher2[m].value;
				checkValuesClassTeacherArr2[pno5] = checkValuesClassTeacher2
						+ '~' + 'Yes';
				pno5++;
			} else {
				uncheckValue2 = checkValClassTeacher2[m].value;
				unCheckValuesArr2[pno6] = uncheckValue2 + '~' + 'No';
				pno6++;
			}
		}
		if (checkValuesTeacherArr2.length != 0)
		{
			finalCheckValueArr2[pnumber] = checkValuesTeacherArr2;
			pnumber++;
		}
		if (checkValuesStudentArr2.length != 0)
		{
			finalCheckValueArr2[pnumber] = checkValuesStudentArr2;
			pnumber++;
		}
		if (checkValuesParentArr2.length != 0)
		{
			finalCheckValueArr2[pnumber] = checkValuesParentArr2;
			pnumber++;
		}
		if (checkValuesPrincipalArr2.length != 0)
		{
			finalCheckValueArr2[pnumber] = checkValuesPrincipalArr2;
			pnumber++;
		}
		if (checkValuesClassTeacherArr2.length != 0)

		{
			finalCheckValueArr2[pnumber] = checkValuesClassTeacherArr2;
			pnumber++;
		}
		if (unCheckValuesArr2.length != 0)

		{
			finalCheckValueArr2[pnumber] = unCheckValuesArr2;
			pnumber++;
		}
		if(finalCheckValueArr2.length==0){
			finalCheckValueArr2=null;
		}
		var url = 'http://localhost:3000/rules/save/' + schoolid +'/'+ featureid + '/'
				+ finalCheckValueArr + '/' + finalCheckValueArr2;
	
		/*if (checkValuesTeacherArr.length == 0
				&& checkValuesStudentArr.length == 0
				&& checkValuesParentArr.length == 0
				&& checkValuesPrincipalArr.length == 0
				&& checkValuesClassTeacherArr.length == 0
				&& checkValuesTeacherArr2.length == 0
				&& checkValuesStudentArr2.length == 0
				&& checkValuesParentArr2.length == 0
				&& checkValuesPrincipalArr2.length == 0
				&& checkValuesClassTeacherArr2.length == 0) {
			alert('You have not selected any checkbox.Please select any checkbox');
		} else {*/
			$.ajax({
				type : 'POST',
				url : url,
				success : function(data1) {
					console.log('success');
					alert(data1);
				}
			});
		/*}*/
	}