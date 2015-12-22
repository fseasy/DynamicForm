<div class="edit_w" id="edit_w" name="edit_w">
	<div class="title_w">创建动态表单</div>
	<div class="edit" id="edit" name="edit"></div>
</div>
<div class="res_w" id="res_w">
	<div class="title_w">预览表单</div>
	<div class="res" id="res" name="res"></div>
</div>
<div class="control">
		<div class="types" name="typesel">
			<label>元素类型</label>
			<select id="type_sel">
				<option value="0">标题</option>
				<option value="1">备注</option>
				<option value="2">单行输入框</option>
				<option value="3">多行输入框</option>
				<option value="4">单项选择框</option>
				<option value="5">多项选择框</option>
				<option value="6">时间选择控件</option>
			</select>
			<button id="btn_add" name="btn_add" onclick="add() ;">添加</button>
			<button id="btn_build" name="btn_build" onclick="getForm()">预览</button>
			<button id="btn_sub" name="btn_sub" onclick="btn_sub() ;" style="display:none ;">确定</button>
		</div>
	
</div>	