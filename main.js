function Loadjson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == "200"){
    callback(xhr.responseText);
  };
}
xhr.send(null);
}
Loadjson("data.json",function(text)
{
  var data=JSON.parse(text);
  console.log(data);
  basics(data.details);
  careerinfo(data.career);
   education(data.education);
})

var child1=document.querySelector(".child1");
function basics(det){
  var image = document.createElement("img");
  image.src=det.image;
  child1.appendChild(image);

  var name = document.createElement("h4");
  name.textContent = det.name;
  child1.appendChild(name);

  var phone = document.createElement("h4");
  phone.textContent=det.phone;
  child1.appendChild(phone);

  var email = document.createElement("h4");
  email.textContent=det.email;
  child1.appendChild(email);

  var add = document.createElement("h4");
  add.textContent="address";
  child1.appendChild(add);

  var hr = document.createElement("hr");
  child1.appendChild(hr);

  var p = document.createElement("p");
  p.textContent=det.address;
  child1.appendChild(p);
}
var child2=document.querySelector(".child2");
function careerinfo(info){
  var heading = document.createElement("h2");
  heading.textContent="careerObjective";
  child2.appendChild(heading);
var p= document.createElement("p");
  p.textContent=info.info;
  child2.appendChild(p);
}
function education(e){
  var hd = document.createElement("h2");
  hd.textContent = "educational qualification";
  child2.appendChild(hd);

  var td = document.createElement("hr");
  child2.appendChild(td);

  var tab = document.createElement("table");
  tab.border = "5";
  child2.appendChild(tab);

  tabdata="<tr><th>"+"qualification"+"</th><th>"+"institute"+"</th><th>"+"year"+"</th><th>"+"percentage"+"</th><tr>";

  for(i=0;i<e.length;i++){
    tabdata+="<tr><td>"+e[i].qualification+"</td><td>"+e[i].institute+"</td><td>"+e[i].year+"</td><td>"+e[i].percentage+"</td></tr>";
  }
  tab.innerHTML = tabdata;
}
function skills(skillinfo){
  var hd = document.createElement("h2");
  hd.textContent="technical skills";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<skillinfo.length;i++){
    var title = document.createElement("h4");
    title.textContent=skillinfo[i].title;
    child2.appendChild(title);

    var eul = document.createElement("ul");
    var eli = document.createElement("li");
    eli.textContent=skillinfo[i].info;
    eul.appendChild(eli);
    child2.appendChild(eul);
}
}
function openpage()
{
  window.open("treble.html","_self",true)
}
