var list = []; // list of Students

$(document).ready(function() 
{
	//Add click event
	$("#add").click(function() 
	{
		clickAdd();
	});

	$("#button1").click(function() 
	{
		showMedium();
	});	

	$("#button2").click(function() 
	{
		sortList();
	});	

	$("#button3").click(function() 
	{
		showWellStudent();
	});		
});

/**
 * [checkInputString Kiểm tra input Họ và tên]
 * @return {Boolean} 
 * [
 * true: Đúng
 * false: Sai
 * ]
 */
function checkInputString() 
{
	var input = $("#name").val();
	if(input == "") 
	{
		$("#name").after("<p class = \"noti\">Nhập tên!</p>");
		return false;
	}	
	return true;
}

/**
 * [checkInputScore Kiểm tra input điểm số]
 * @param  {[String]} id [id của input]
 * @return {Boolean} 
 * [
 * true: Đúng
 * false: Sai
 * ]
 */
function checkInputScore(id) {
	var input = parseInt($(id).val());

	if(input >= 0 && input <= 10)
	{
		return true;
	}	
	else		
	{
		$(id).after("<p class = \"noti\">Nhập điểm từ 0 đến 10!</p>");
		return false;
	}
}

/**
 * [clickAdd Event khi Click "Nhập"]
 */
function clickAdd() 
{
	// Clear all old Noti
	$(".noti").remove();

	// Check input
	if(checkInputString() && checkInputScore("#math") && checkInputScore("#chemistry") && checkInputScore("#physical"))
	{
		addNew();
		$("input").val("");
	}

}

/**
 * [addNew Tạo một đối tượng mới vào List]
 */
function addNew()
{
	// Get Input
	var name = $("#name").val();
	var math = $("#math").val();
	var chemistry = $("#chemistry").val();
	var physical = $("#physical").val();

	// Add to Array
	var person = new Person(name, math, chemistry, physical);
	list.push(person);

	// Update on HTML
	addRow(person, list.length, false);

}

/**
 * [Thêm 1 Row mới trên Table]
 * @param {[Person]} person     [Person]
 * @param {[int]} oder       [STT của Person trên Table]
 * @param {[Boolean]} mediumBool [Có hiện điểm trung bình không?]
 */
function addRow(person, oder, mediumBool) 
{	
	// Add new row
	var row = $("<tr><\tr>").attr("id", oder);
	$("tbody").append(row);

	// Add cell
	$("#" + oder).append($("<td><\td>").text(oder));
	$("#" + oder).append($("<td><\td>").text(person.name));
	$("#" + oder).append($("<td><\td>").text(person.math));
	$("#" + oder).append($("<td><\td>").text(person.chemistry));
	$("#" + oder).append($("<td><\td>").text(person.physical));
	if(mediumBool == true)
	{
		$("#" + oder).append($("<td><\td>").text(person.medium));
	}
	else
	{
		$("#" + oder).append($("<td><\td>").text("?"));
	}
}

///////Button/////////
/**
 * [showMedium hiện điểm trung bình]
 */
function showMedium() 
{
	// Clear table
	$("tbody").empty();

	//Show
	for (var i = 0; i < list.length; i++) 
	{
		addRow(list[i],i + 1, true);
	}
}

/**
 * [sortList Sắp xếp list học sinh theo điểm trung bình tăng dần]
 */
function sortList()
{
	// Sort
	for (var i = 0; i < list.length; i++) 
	{
		for (var j = 0; j < list.length; j++) 
		{
			if(list[i].medium > list[j].medium)
			{
				var extra = list[i];
				list[i] = list[j];
				list[j] = extra;
			}
		}
	}

	//Show
	showMedium();
}

/**
 * [showWellStudent Hiện học sinh giỏi]
 */
function showWellStudent() 
{
	// Tìm học sinh giỏi và hiện
	for (var i = 0; i < list.length; i++) 
	{
		if(list[i].medium >= 8.0)
		{
			$("#"+(i + 1)).addClass("wellStudent");
		}
	}
}