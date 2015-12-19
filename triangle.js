/*
 
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/


i = 1;
pound = "#";
while(i < 8){
  console.log(pound);
  pound = pound.concat('#');
  i++;
}