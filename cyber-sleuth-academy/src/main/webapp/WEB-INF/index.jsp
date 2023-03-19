<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="/css/main.css"/>
<title>Cyber Sleuth Academy</title>
</head>
<body>
	<div class="container">
		<div class="top-header">
			<div>
				<h1 class="big-header">Cyber Sleuth Academy</h1>
				<h3>Learn to become a true master of Digimon competitive battling!</h3>
			</div>
			<div>
				<a href="${pageContext.servletContext.contextPath}/hmcalc/">View Damage Calc</a>
			</div>
		</div>
		<div class="">
		
		</div>
		<div class="">
			<h3>Digimon Database Search</h3>
			<form action="/update-search" method="post">
				<div>
					<label>Stage: </label>
					<c:forEach var="stage" items="${stages}">
						<label><input type="checkbox" name="${stage.stageName}"><c:out value="${stage.stageName}"/></label>
					</c:forEach>
				</div>
				<div>
					<label>Type: </label>
					<c:forEach var="type" items="${types}">
						<label><input type="checkbox" name="${type.typeName}"><c:out value="${type.typeName}"/></label>
					</c:forEach>
				</div>
				<div>
					<label>Attribute: </label>
					<c:forEach var="attribute" items="${attributes}">
						<label><input type="checkbox" name="${attribute.attributeName}"><c:out value="${attribute.attributeName}"/></label>
					</c:forEach>
				</div>
				<div>
					<label>Growth Type: </label>
					<c:forEach var="growthType" items="${growthTypes}">
						<label><input type="checkbox" name="${growthType.growthTypeName}"><c:out value="${growthType.growthTypeName}"/></label>
					</c:forEach>
				</div>
				<input name="submit" type="submit" value="Search">
			</form>
			<div>
				<label>Click a header to sort a column</label>
				<table id="sort-table">
					<thead>
						<tr>
							<th onclick="sortTable(0)">Number</th>
							<th onclick="sortTable(1)">Digimon</th>
							<th onclick="sortTable(2)">Growth Type</th>
							<th onclick="sortTable(3)">Stage</th>
							<th onclick="sortTable(4)">Type</th>
							<th onclick="sortTable(5)">Attribute</th>
							<th onclick="sortTable(6)">Equip Slots</th>
							<th onclick="sortTable(7)">HP</th>
							<th onclick="sortTable(8)">SP</th>
							<th onclick="sortTable(9)">ATK</th>
							<th onclick="sortTable(10)">DEF</th>
							<th onclick="sortTable(11)">INT</th>
							<th onclick="sortTable(12)">SPE</th>
						</tr>
					</thead>
					<tbody>
						<c:forEach var="digimon" items="${digimons}">
							<tr>
								<td><c:out value="${digimon.id}"/></td>
								<td><c:out value="${digimon.diginame}"/></td>
								<td><c:out value="${digimon.growthType.growthTypeName}"/></td>
								<td><c:out value="${digimon.stage.stageName}"/></td>
								<td><c:out value="${digimon.type.typeName}"/></td>
								<td><c:out value="${digimon.attribute.attributeName}"/></td>
								<td><c:out value="${digimon.items}"/></td>
								<td><c:out value="${digimon.hp_stat}"/></td>
								<td><c:out value="${digimon.sp_stat}"/></td>
								<td><c:out value="${digimon.atk_stat}"/></td>
								<td><c:out value="${digimon.def_stat}"/></td>
								<td><c:out value="${digimon.int_stat}"/></td>
								<td><c:out value="${digimon.spd_stat}"/></td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
	</div>
   	 <script src="js/home-script.js"></script>
</body>
</html>