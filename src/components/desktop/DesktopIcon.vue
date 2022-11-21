<!--桌面图标-->
<template>
	<div class="desktop-icon" :title="iconFullName">
		<i :class="'fa fa-' + iconFontAwesomeClass"
		   :style="{color: iconColor, fontSize: '3em'}"
		   v-if="iconSize === undefined || iconSize === null"
		   aria-hidden="true"></i>
		<i :class="'fa fa-' + iconFontAwesomeClass"
		   :style="{color: iconColor, fontSize: iconSize}"
		   v-if="iconSize !== undefined && iconSize !== null"
		   aria-hidden="true"></i>
		<div class="desktop-icon-font">{{ iconName }}</div>
	</div>
</template>

<script>
export default {
	name: "DesktopIcon",
	props: [
		// 图标全名，鼠标移上去的标签里面的名称
		"iconFullName",
		// 图标FontAwesome类名，不加fa和fa-开头的
		"iconFontAwesomeClass",
		// 图标颜色，默认为黑色
		"iconColor",
		// 图标大小-单位（em），默认为3em
		"iconSize",
		// 图标名称
		"iconName"
	]
}
</script>

<style scoped>
.desktop-icon {
	padding: 0.5em;
	width: 4em;
	font-size: small;
	display: inline-block;
	writing-mode: horizontal-tb;
	text-align: center;
	margin-top: 0.5em;
}

.desktop-icon-font {
	margin-top: 0.5em;
	user-select: none;
}

.desktop-icon:hover {
	background: rgba(245, 245, 245, 0.2);
	border-radius: 0.5em;
}
</style>