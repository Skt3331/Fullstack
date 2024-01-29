name <- c("saurav","sarvadnya","vaidhav")
age <-c(45,23,54)
city <-c("pune","nashik","nagpur")
job <-c("tester","Devloper","Marketing")

empframe <- data.frame(name,age,city,job)

write.csv(empframe,"mydata.csv")

rec <- read.csv("mydata.csv")

print(rec)
