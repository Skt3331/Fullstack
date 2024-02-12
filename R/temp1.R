
data <- read_csv("data.csv")
meanval <- mean(data$emp_salary)
mediamv <- median(data$emp_salary)
#modev <- names(which.max(table(data$emp_salary)))
#mlv(data$emp_salary)
quartiv <-quantile(data$emp_salary)

quantile(data$emp_salary, probs = c(0.25, 0.5, 0.75))
meanval
mediamv
#modev
quartiv                                                     