
            <% if(state=="编辑"){ %>
            <div class="edit">
            	<div class="title">
                	<div class="titletext">收货人信息</div>
                    <div class="titlemore"><label>[关闭]</label></div>
                </div>
                <% if(contain1.length>0){ %>
                <div class="list">
                	<div class="h2">常用地址</div>
                	<ul>
                    <% for(var i=0;i<contain1.length;i++){ %> 
                    	<% var list=contain1[i] %>
                    	<li <%if(select==i){%>class="on"<%}%>><input name="select" type="radio" value="<%= i%>" <% if(i==select){ %>checked="checked" <%}%> onclick="contain1.setSelect(<%= i%>)" /><b><%= list.name %></b>  <%= list.province[0] %><%= list.province[1] %><%= list.province[2] %> <%= list.address %> <%= list.phone %>  <label>编辑</label><label>删除</label></li>
                     <% } %>
                     <li><input name="select" type="radio" value="new" <% if(select==-1){ %>checked="checked" <%}%>onclick="contain1.setSelect(-1)" />使用新地址</li>
                    </ul>
                </div>
                <% } %>
                <% if(select>-1){ %>
                <% var list=contain1[select] %>
                <div class="module">
                	<div><span>收货人信息：</spam><input type="text" value="<%= list.name %>" /></div>
                    <div><span>省份：</span><select name="">
                      <option value="1"><%= list.province[0] %></option>
                  </select><select name="">
                      <option value="1"><%= list.province[1] %></option>
                  </select><select name="">
                      <option value="1"><%= list.province[2] %></option>
                  </select>
                  <span>注:</span>
                  </div>
                    <div><span>地址：</span><input type="text" value="<%= list.address %>" /></div>
                    <div><span>手机号码：</span><input type="text" value="<%= list.phone %>" />或者 <span>固定电话：</span><input type="text" value="<%= list.telephone %>" />用于接受</div>
                    <div><span>电子邮件：</span><input type="text" value="<%= list.email %>" />用于接</div>
                    <div><span>邮政编码：</span><input type="text" value="<%= list.code %>" />用于接</div>
                    <div><label>[添加到常用地址]</label></div>
                </div>
                <% }else{ %>
                	<div class="module">
                	<div><span>收货人信息：</spam><input type="text" value="" /></div>
                    <div><span>省份：</span><select name="">
                      <option value="1"></option>
                  </select><select name="">
                      <option value="1"></option>
                  </select><select name="">
                      <option value="1"></option>
                  </select>
                  <span>注:</span>
                  </div>
                    <div><span>地址：</span><input type="text" value="" /></div>
                    <div><span>手机号码：</span><input type="text" value="" />或者 <span>固定电话：</span><input type="text" value="" />用于接受</div>
                    <div><span>电子邮件：</span><input type="text" value="" />用于接</div>
                    <div><span>邮政编码：</span><input type="text" value="" />用于接</div>
                    <div><label>[添加到常用地址]</label></div>
                </div>
                <% } %>
                <div class="btn">
                	<input type="button" value="" />
                </div>
            </div>
            <% }else{ %>
            <div class="show">
            	<div class="title">
                	<div class="titletext">收货人信息</div>
                    <div class="titlemore"><label>[修改]</label></div>
                </div>
                <div class="module">
                	<div>曹科   15101175662 914890674@qq.com </div>
                    <div>北京 朝阳区 三环到四环之间    安贞里二区16号楼612房间</div>
                </div>
            </div>
            <% } %>
        	
            

  
            	