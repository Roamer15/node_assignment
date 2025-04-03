### Assignment

*This ReadMe is addressed to the questions asked within my assignment*

1. **How the code functions**  The loadConfig function is a recursive function, that reads a list of files (configFiles) asynchronously and merges their content into a single existing object(configData). The reading of the next file, is dependent on the position of the previous file and the data found in the configData object i.e recursion is used to read data in the array one by one.

2. **How is error handling done in my program**Incase a file is missing or can't be read, the program throws an error message telling the user why the file wasn't read and proceeds to read the other files.