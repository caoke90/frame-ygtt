<link href="css/gwlc2.css" rel="stylesheet" type="text/css" />
		<div class="contain">
        	<div class="contain1">
            <% if(state=="选择"&&state=="编辑"){ %>
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
                    	<li <%if(select==i){%>class="on"<%}%>><input name="select" type="radio" value="<%= i%>" <% if(i==select){ %>checked="checked" <%}%> onclick="setData('select',<%= i%>)" /><b><%= list.name %></b>  <%= list.province[0] %><%= list.province[1] %><%= list.province[2] %> <%= list.address %> <%= list.phone %>  <label>编辑</label><label>删除</label></li>
                     <% } %>
                     <li><input name="select" type="radio" value="new" <% if(select==-1){ %>checked="checked" <%}%>onclick="setData('select',-1)" />使用新地址</li>
                    </ul>
                </div>
                <% } %>
                <% if(state=="编辑"){ %>
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
                <%}%>
                <% if(select==-1){ %>
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
        	
            
            </div>
            <div class="contain2">
        	<div class="edit">
            	<div class="title">
                	<div class="titletext">支付及配送方式</div>
                    <div class="titlemore"><label>[关闭]</label></div>
                </div>
               	<div class="pay">
                	<div class="h2"><div class="titletext">支付方式</div><div class="titlemore">备注</div></div>
                    <ul>
                    	<li><input name="" type="radio" value="" />货到付款 <span>送货上门后在收款，支持现金、pos机刷卡、支票支付</span><label>查看运费及配送范围</label></li>
                        <li><input name="" type="radio" value="" />在线支付 <span>即时到账，支持绝大多数银行借记卡及部分银行信用卡</span><label>查看银行及额度</label></li>
                        <li><input name="" type="radio" value="" />公司转账 <span>通过快钱平台转账 转账后1-3个工作日内到账</span><label>查看银行信息</label></li>
                    </ul>
                </div>
                <div class="take">
                	<div class="h2"><div class="titletext">配送方式</div><div class="titlemore"><span>运费</span><span>备注</span></div></div>
                    <ul>
                    	<li><input name="" type="radio" value="" />来阳光自<span>自提时付款，支持现金、pos机刷卡、支票支付、</span><label>查看自提点地址</label></li>
                        <li><input name="" type="radio" value="" />阳光快递<span>5元</span><span>由阳光公司负责配送，速度很快，还接受上门刷卡付款服务</span></li>
                        <div class="takelist">
                        	<div>
                            	<span>送货日期</span>
                                <ul>
                                	<li><input name="" type="radio" value="" />只在工作日送货（双休日、假日不用送）</li>
                                    <li><input name="" type="radio" value="" />工作日、双休日与假日均可送货</li>
                                    
                                </ul>
                            </div>
                            <div><span>是否送货前电话确认：</span><input type="radio" />是<input type="radio" />否</div>											
                            <div>
                            	<span class="red">声明:</span>
                                <ul>
                                	<li>1.我们会努力按照您制定的时间配送，但因天气、交通等各类因素影响，您的订单有可能有延误现象|</li>
                                    <li>2.为避免发货延迟，大件商品要尽快完成支付|以上敬请谅解</li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </div>
                <div class="btn">
                	<input type="button" value="" />
                </div>
            </div>
            <div class="show">
            	<div class="title">
                	<div class="titletext">支付及配送信息</div>
                    <div class="titlemore"><label>[修改]</label></div>
                </div>
                <div class="module">
                	<div>在线支付</div>
                    <div>阳光快递 中小件商品 <label>工作日、双休日与假日均可送货</label></div>
                </div>
            </div>
            </div>
            <div class="contain3">
        	<div class="edit">
            	<div class="title">
                	<div class="titletext">发票信息</div>
                    <div class="titlemore"><label>[关闭]</label></div>
                </div>
               	<div class="pay">
               	  <div class="h2"><div class="titletext">类型和抬头</div></div>
                   <div class="module">
                   <ul>
                    	<li><span>发票类型：</span><input name="" type="radio" value="" />普通发票 <input name="" type="radio" value="" />增值税发票</li>
                        <li><span>发票抬头：</span><input name="" type="radio" value="" />个人 <input name="" type="radio" value="" />单位 <input type="text"  /><label>添加到常用发票</label></li>
                        <li><span>发票内容：</span><input name="" type="radio" value="" />明细 <input name="" type="radio" value="" />办公用品 <input name="" type="radio" value="" />电脑配件 <input name="" type="radio" value="" />耗材</li>
                    </ul>
                   </div>
                </div>
                
                <div class="btn">
                	<input type="button" value="" />
                </div>
            </div>
            <div class="show">
            	<div class="title">
                	<div class="titletext">发票信息</div>
                    <div class="titlemore"><label>[修改]</label></div>
                </div>
                <div class="module">
                	<div>普通发票 个人 图书</div>
                </div>
            </div>
            </div>
      		<div class="block blo2">
    	<div class="title">
        	<div class="titletext">商品清单</div>
            <div class="titlemore">返回修改购物车</div>
        </div>
        <div class="table">
        	<div class="thead">
                <ul>
                    <li>
                        <div>商品编号</div>
                        <div>商品名称</div>
                        <div></div>
                        <div>阳光价</div>
                        <div>返现</div>
                        <div>赠送积分</div>
                        <div>库存状态</div>
                        <div>商品数量</div>
                    </li>
                </ul>
            </div>
            <div class="tbody">
            <ul>
            	<li>
            	<div>2093444</div>
                <div>天堂安全型自行车与于波</div>
                <div>￥29.00</div>
                <div>-</div>
                <div>0</div>
                <div>现货</div>
                <div>1</div>
                </li>
                <li>
            	<div>2093444</div>
                <div>天堂安全型自行车与于波</div>
                <div>￥29.00</div>
                <div>-</div>
                <div>0</div>
                <div>现货</div>
                <div>1</div>
                </li>
                <li>
            	<div>2093444</div>
                <div>天堂安全型自行车与于波</div>
                <div>￥29.00</div>
                <div>-</div>
                <div>0</div>
                <div>现货</div>
                <div>1</div>
                </li>
                <li>
            	<div>2093444</div>
                <div>天堂安全型自行车与于波</div>
                <div>￥29.00</div>
                <div>-</div>
                <div>0</div>
                <div>现货</div>
                <div>1</div>
                </li>
            </ul>
            </div>
        </div>  
    </div>
    		<div class="block blo3">
    	<div class="title">
        	<div class="titletext">结算信息</div>
        </div>
        <div class="module">
        	<div class="h2">
                商品金额：29.00元+运费：5.00元-优惠券：0.00元-礼品卡：0.00元-返现：0.00元
            </div>
            <div class="youhui">
            <div class="show1">(+)使用优惠券抵消部分总额</div>
            <div class="hide1">请输入你手中的优惠券密码：<input type="text" /><input class="button" type="button" value="使用" /></div>
            <div class="show2">(+)使用阳关礼品卡</div>
            <div class="hide2">请输入你手中的礼品卡卡号：<input type="text" /><input class="button" type="button" value="使用" /></div>
            </div>
        </div>
        <div class="btn"><div class="h2">应付总额：<span>￥58.00</span>元</div><input type="button" value="" /></div>
    </div>
        </div>
            	