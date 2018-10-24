/**
 * [Person Tạo 1 Object Person mới]
 * @param {[String]} name   [Họ và tên]
 * @param {[Int]} math      [Điểm Toán]
 * @param {[Int]} chemistry [Điểm Hoá]
 * @param {[Int]} physical  [Điểm Lý]
 */
function Person(name, math, chemistry, physical) {
	this.name = name;
	this.math = parseInt(math);
	this.chemistry = parseInt(chemistry);
	this.physical = parseInt(physical);

	// Tính điểm trung bình
	this.medium = (this.math + this.chemistry + this.physical) / 3; 
}