data <- read.csv("mydata.csv")
print(data)

meanval <- mean(data$age)
mediamv <- median(data$age)
modev <- names(which.max(table(data$name)))
quarti <-quantile(data$age)

print("Mean:") 
print(meanval)

print("Median:")
print(mediamv)
print("Mode:")
print(modev)
print("Quartiles")
print(quarti)


