function StorageService({service,get,loginUrl,}){this.auth=null;this.service=service;this.storages=null;this.loginUrl=loginUrl;this.setAuth=(auth)=>{this.auth=auth;}
this.fetch=async()=>{if(this.auth.is_login){const res=await service.graphql({query:get.replace(/\s+/g,' ')});this.storages=res?.data?.user_Storage;}}}
function ToastButton({toast,needle,buttons,post,attribute,remove,hidePopup,}){this.toast=toast;this.needle=needle;this.isActive=false;this.buttons=buttons;this.id=null;this.click=async function(element){_pt(element);if(false===this.auth.is_login){return window.location.href=this.loginUrl;}
if(this.isActive){await this.service.graphql({query:remove.replace(/\s+/g,' ').replace('@id',this.id)});this.id=null;}else{let response=await this.service.graphql({query:post.replace(/\s+/g,' ')})
this.id=response?.data?.job2?.metadata?.data?.id;}
this.isActive=!this.isActive;this.updateButton();this.showToast();}
this.showToast=()=>{if(hidePopup)return;if(false===this.isActive)return;this.toast.forEach((toast)=>{toast.classList.remove("hide");toast.classList.add("show");setTimeout(()=>{toast.classList.remove("show");toast.classList.add("hide");setTimeout(()=>{toast.classList.remove("hide");},300);},2000);});}
this.updateButton=()=>{this.buttons.forEach((button)=>{button.classList.toggle(this.needle,this.isActive);})}
this.get=()=>{if(this.storages?.[attribute]?.edges?.length>0){this.id=this.storages?.[attribute]?.edges?.pop()?.node?.data?.id;this.isActive=true;this.updateButton();}}}