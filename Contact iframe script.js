
function Contact()
{
    var ufirstname = document.getElementById("f_name").value;
    if(ufirstname==""||ufirstname=="null")
    {
        document.getElementById("error f_name").innerText = "Please enter first name";
    }
    var ulastname = document.getElementById("l_name").value;
    if(ulastname==""||ulastname=="null")
    {
        document.getElementById("error l_name").innerText = "Please enter last name";
    }
    var uemailaddress = document.getElementById("e_address").value;
    if(uemailaddress==""||uemailaddress=="null")
    {
        document.getElementById("error e_address").innerText = "Please enter email address";
    }
    var uaddress = document.getElementById("address").value;
    if(uaddress==""||uaddress=="null")
    {
        document.getElementById("error_address").innerText = "Please enter address";
    }
    var ucity = document.getElementById("city").value;
    if(ucity==""||ucity=="null")
    {
        document.getElementById("error_city").innerText = "Please enter city";
    }
    var upost = document.getElementById("post").value;
    if(upost==""||upost=="null")
    {
        document.getElementById("error_post").innerText = "Please enter postcode";
    }
    var country = document.getElementById("ucountry").value;
    if(country==""||country=="null")
    {
        document.getElementById("error_country").innerText = "Please select country";
    }    

    var getSelectedValue = document.querySelector('input[name="Course"]:checked');
    if(getSelectedValue == null) {
        document.getElementById("error").innerHTML = "Please select Course"
    }
}

function F_Name_Alert (val)
{
    if(val.value==""||val.value==null)
    {
        document.getElementById("error f_name").innerText = "Please enter first name";
    }
}