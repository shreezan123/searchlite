package howard.west.cs276.assignments;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.RandomAccessFile;
import java.nio.channels.FileChannel;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.Scanner;
import java.io.FileNotFoundException;

public class Description{
 
        public String getDescription(String fileName, String term) throws FileNotFoundException{
            File file = new File("data/" + fileName);
            Scanner input = new Scanner(file);
            final Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                final String lineFromFile = scanner.nextLine();
                if(lineFromFile.contains(term)) { 
                    // a match!
                    Integer index = lineFromFile.indexOf(term);

                    String[] sp = lineFromFile.split(" +"); // "+" for multiple spaces
                    for (int i = 2; i < sp.length; i++) {
                        if (sp[i].equals(term)) {
                            // have to check for ArrayIndexOutOfBoundsException
                            String surr = (i-2 > 0 ? sp[i-2]+" " : "") +
                                        (i-1 > 0 ? sp[i-1]+" " : "") +
                                        sp[i] +
                                        (i+1 < sp.length ? " "+sp[i+1] : "") +
                                        (i+2 < sp.length ? " "+sp[i+2] : "");
                            return "0/" + surr;
                        }
                    }
                    
                    
                } 
            }
            return "Not Found";
        }
}

/*
String line;
                    int i = 20;
                    int j = 20;
                    while(true){
                        if(index - i < 0)
                            i++;
                        if(index + j >= lineFromFile.length())
                            j--;
                        if((index - i >= 0) && (index + j < lineFromFile.length())){
                            return "/0" + lineFromFile.substring(index-i, index+j);
                        }
                    }
                */