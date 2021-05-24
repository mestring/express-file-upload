 

   let d = new Date();
   let dd = d.getDate();
   let mm = d.getMonth()+1;
   let yyyy = d.getFullYear();
   if(dd<10)
      { dd = '0'+ dd;
   }
   if(mm<10)
      { mm = '0'+ mm;
   }
   let date = yyyy+mm+dd;
   let Dir = __basedir + "/resources/static/assets/uploads/" + date + "/";

module.exports = Dir;
