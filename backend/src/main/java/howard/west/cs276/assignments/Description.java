package howard.west.cs276.assignments;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.io.FileNotFoundException;

public class Description{
    public String getDescription(String fileName, String term) throws FileNotFoundException{
        List <String> terms = new ArrayList<String>();
        String description = "";
        //Account for multiworded queries
        for(String s: term.split(" +")){
            terms.add(s);
        }
        Arrays.asList(term.split(" +"));
        File file = new File("data/" + fileName);
        final Scanner scanner = new Scanner(file);
        while (scanner.hasNextLine()) {
            final String lineFromFile = scanner.nextLine();
            //if(lineFromFile.contains(term)) { 
            if(terms.parallelStream().anyMatch(lineFromFile::contains)){
                // a match!
                String[] sp = lineFromFile.split(" +"); // "+" for multiple spaces
            
                for (int i = 0; i < sp.length; i++) {
                    //Account for multi-worded queries
                    for(String s: terms){ 
                        if (sp[i].equals(s)) {
                            // have to check for ArrayIndexOutOfBoundsException
                            String surr = (i-2 > 0 ? sp[i-2]+" " : "") +
                                        (i-1 > 0 ? sp[i-1]+" " : "") +
                                        sp[i] +
                                        (i+1 < sp.length ? " "+sp[i+1] : "") +
                                        (i+2 < sp.length ? " "+sp[i+2] : "");
                            return "0/" + surr + "...";
                        }
                    }
                }
                    
            
            } 
        }
        return "0/Not Found";
    }
}
