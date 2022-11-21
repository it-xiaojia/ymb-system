<!--系统桌面-->
<template>
	<div>
		<!--桌面壁纸-->
		<img :src="desktopDefaultWallpaper" alt="桌面背景" class="desktop"/>
		<!--桌面区域-->
		<div class="desktop desktop-area" @click="hiddenMenuItem" @contextmenu.prevent="showContextMenu($event)">
			<!--桌面图标-->
			<DesktopIcon icon-font-awesome-class="desktop" icon-full-name="这是一台电脑" icon-name="此电脑"/>
			<DesktopIcon icon-font-awesome-class="cog" icon-name="设置"/>
		</div>
		<!--窗口区域-->
		<div class="window">
			<div draggable="true" ref="wnd" class="window1" @dragstart="startDrag" @dragend="endDrag">窗口1</div>
		</div>
		<!--开始菜单项-->
		<div ref="startMenuItem" class="desktop start-menu-item" :style="menuItemStyle"></div>
		<!--任务栏-->
		<div class="task-bar" @click="hiddenMenuItem" @contextmenu.prevent="showContextMenu">
			<!--开始菜单区域-->
			<div class="task-bar-area start-menu-area">
				<!--开始菜单-->
				<div class="start-menu" title="开始" @click.stop="showMenuItem">
					<i class="fa fa-windows" aria-hidden="true"></i>
				</div>
			</div>
			<!--托盘图标区域-->
			<div class="task-bar-area tray-icon-area">
				<!--时间-->
				<div class="datetime" title="2022年9月29日">
					<div>11:37:12</div>
					<div>2022/09/29</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import desktopDefaultWallpaper from "@/assets/win10.jpg"
import DesktopIcon from "@/components/desktop/DesktopIcon";

export default {
	name: "YmbDesktop",
	components: {DesktopIcon},
	data() {
		return {
			desktopDefaultWallpaper: desktopDefaultWallpaper,
			isShowMenuItem: false,
			menuItemStyle: {
				display: "none"
			}
		}
	},
	methods: {
		startDrag(e) {
			console.log(this.$refs.wnd.style.top);
			console.log(this.$refs.wnd.style.left);
		},
		endDrag(e) {
			// console.log(e);
			this.$refs.wnd.style.top = (this.$refs.wnd.style.top + 10) + "px";
			this.$refs.wnd.style.left = (this.$refs.wnd.style.left + 20) + "px";

		},
		showMenuItem() {
			if (this.isShowMenuItem) {
				this.menuItemStyle = {
					display: "none"
				}
				this.isShowMenuItem = false;
			} else {
				this.menuItemStyle = {
					display: "block"
				}
				this.isShowMenuItem = true;
			}
		},
		hiddenMenuItem() {
			this.menuItemStyle = {
				display: "none"
			}
			this.isShowMenuItem = false;
		},
		showContextMenu(event) {
			console.log("event.target=", event.target)
			console.log("右键单击事件触发")
		}
	}
}
</script>

<style scoped>
.desktop {
	position: absolute;
	z-index: 0;
	height: 94vh;
	width: 100%;
}

.desktop-area {
	writing-mode: vertical-lr;
}

.window {
	position: absolute;
	z-index: 1;
	height: 94vh;
	width: 100%;
	background: lightgray;
}

.window1 {
	width: 300px;
	height: 200px;
	background: dodgerblue;
	position: absolute;
	top: 10px;
	left: 10px;
}

.task-bar {
	width: 100%;
	height: 6vh;
	position: fixed;
	bottom: 0;
	overflow: hidden;
	background: black;
	display: flex;
	align-items: center;
	z-index: 9999;
}

.task-bar-area {
	height: 80%;
	float: left;
}

.start-menu-area {
	width: 80%;
	margin-left: 0.5em;
	display: flex;
	align-items: center;
}

.start-menu {
	height: 2em;
	border-radius: 0.5em;
	padding: 0.3em;
	font-size: 2em;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
}

.start-menu:hover {
	color: dodgerblue;
}

@keyframes start-menu-item-show {
	from {
		height: 0;
	}
	to {
		height: 80vh;
	}
}

.start-menu-item {
	width: 15vw;
	height: 80vh;
	background: lightblue;
	bottom: 0;
	animation: start-menu-item-show 250ms;
	border-radius: 0.5em;
	margin-left: 0.5em;
	z-index: 9999;
}

.tray-icon-area {
	width: 20%;
	margin-right: 0.5em;
	font-size: small;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.datetime {
	border-radius: 0.5em;
	padding: 0.5em;
	user-select: none;
	text-align: right;
	color: white;
}
</style>
