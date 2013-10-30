function PurchaseAppConfig(){
	
}

PurchaseAppConfig.Domain = 'http://cart.jd.com/order';
PurchaseAppConfig.OrderDomain = 'http://cart.jd.com/order';
PurchaseAppConfig.LoginUrl = 'http://passport.jd.com/new/login.aspx?ReturnUrl=';
PurchaseAppConfig.SplitOrderLoginUrl=PurchaseAppConfig.LoginUrl+PurchaseAppConfig.Domain+"/splitOrder.html";
PurchaseAppConfig.OrderLoginUrl=PurchaseAppConfig.LoginUrl+PurchaseAppConfig.Domain+"/orderInfoMain.html";
PurchaseAppConfig.Cart = 'http://cart.jd.com/cart';
PurchaseAppConfig.SuccessOrder = 'http://cart.jd.com/order';
PurchaseAppConfig.ShoppingCart = 'http://cart.jd.com/cart/cart.html';
PurchaseAppConfig.EasyBuy = 'http://cart.jd.com/order/orderInfoMain.html';
PurchaseAppConfig.errorUrl = "http://cart.jd.com/order/orderBack.html?rid=";
PurchaseAppConfig.cartUrl="http://cart.jd.com/cart/cart.html?r=";
PurchaseAppConfig.data={};