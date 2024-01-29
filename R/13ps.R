vector1 <- c(1,2,2,3,4)
vector2 <- c("A","B","B","C","D")

df <- data.frame(vector1,vector2)

print("Dublicate Element:")
print(df[duplicated(df),])

print("Unique rows:")
print(unique(df))
