vector_data <- c(1,2,3,4,5)
matr <- matrix(1:9 ,nrow = 3)
inner_list <- list(a=10,b=20)

my_list <- list(my_vector=vector_data,my_matrix=matr,my_inner_list=inner_list)

fast_element <- my_list[[1]]
secound_element <- my_list[[2]] 
                

cat(fast_element)
cat(secound_element)

