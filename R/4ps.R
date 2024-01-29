string <- "hello world hello"
vector <- c(1,2,2,3,4,4,5)

unic_st <- unique(strsplit(string,"")[[1]])
unic_vc <- unique(vector)

cat(unic_vc)
cat(unic_st)
