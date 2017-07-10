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
import howard.west.cs276.assignments.Description;

import javax.net.ssl.ExtendedSSLSession;

public class Query {

	// Term id -> position in index file
	private static Map<Integer, Long> posDict = new TreeMap<Integer, Long>();
	// Term id -> document frequency
	private static Map<Integer, Integer> freqDict = new TreeMap<Integer, Integer>();
	// Doc id -> doc name dictionary
	private static Map<Integer, String> docDict = new TreeMap<Integer, String>();
	// Term -> term id dictionary
	private static Map<String, Integer> termDict = new TreeMap<String, Integer>();
	// Index
	private static BaseIndex index = null;
	private static Description d = new Description();
	
	/* 
	 * Write a posting list with a given termID from the file 
	 * You should seek to the file position of this specific
	 * posting list and read it back.
	 * */
	private static PostingList readPosting(FileChannel fc, int termId)
			throws IOException {
		fc.position(posDict.get(termId));
		return index.readPosting(fc);
	}

	//Intersection of 2 lists
	private static List<Integer> intersection(List<Integer> first, List<Integer> second){
		List<Integer> common = new ArrayList<Integer>();
		int i = 0;
		int j = 0;
		while(i < first.size() && j < second.size()){
			if(first.get(i) == second.get(j)){
				common.add(first.get(i));
				i++;
				j++;
			}
			else if(first.get(i) < second.get(j)){
				i++;
			}
			else
				j++;
		}
		/*for(int i = 0; i < first.size(); i++){
			if(second.contains(first.get(i)) && !common.contains(first.get(i))){
				common.add(first.get(i));
			}
		}*/
		return common;
	}


	public static List<List<String>> mainQuery(String input, String query) {

	    try {

	        String[] queryTokens = query.split(" ");
                index = new BasicIndex();

		/* Get index directory */
		File inputdir = new File(input);
		if (!inputdir.exists() || !inputdir.isDirectory()) {
			System.err.println("Invalid index directory: " + input);
			return null;
		}

		/* Index file */
		RandomAccessFile indexFile = new RandomAccessFile(new File(input,
				"corpus.index"), "r");

		String line = null;
		/* Term dictionary */
		BufferedReader termReader = new BufferedReader(new FileReader(new File(
				input, "term.dict")));
		while ((line = termReader.readLine()) != null) {
			String[] tokens = line.split("\t");
			termDict.put(tokens[0], Integer.parseInt(tokens[1]));
		}
		termReader.close();

		/* Doc dictionary */
		BufferedReader docReader = new BufferedReader(new FileReader(new File(
				input, "doc.dict")));
		while ((line = docReader.readLine()) != null) {
			String[] tokens = line.split("\t");
			docDict.put(Integer.parseInt(tokens[1]), tokens[0]);
		}
		docReader.close();

		/* Posting dictionary */
		BufferedReader postReader = new BufferedReader(new FileReader(new File(
				input, "posting.dict")));
		while ((line = postReader.readLine()) != null) {
			String[] tokens = line.split("\t");
			posDict.put(Integer.parseInt(tokens[0]), Long.parseLong(tokens[1]));
			freqDict.put(Integer.parseInt(tokens[0]),
					Integer.parseInt(tokens[2]));
		}
		postReader.close();
		FileChannel indexChannel = indexFile.getChannel();

		    // Fetch all the posting lists from the index.
		    List<PostingList> postingLists = new ArrayList<PostingList>();
		    boolean noResults = false;
		    for (String queryToken : queryTokens) {
			// Get the term id for this token using the termDict map.
			Integer termId = termDict.get(queryToken);
			if (termId == null) {
			    noResults = true;
			    continue;
			}
			else postingLists.add(readPosting(indexChannel, termId));
		    }

		    /*
		     * TODO: Your code here
		     *       Perform query processing with the inverted index.
		     *       Make sure to print to stdout the list of documents
		     *       containing the query terms, one document file on each
		     *       line, sorted in lexicographical order.
		     */

			 List<Integer>common = postingLists.get(0).getList();
			 for(PostingList pl : postingLists){
				 common = intersection(pl.getList(), common);
			 }

			 List<String>fileNames = new ArrayList<String>();
			 List<String>descriptions = new ArrayList<String>();
			 List<List<String>>x = new ArrayList<List<String>>();

			 for(int i = 0; i < common.size(); i++){
				 fileNames.add(docDict.get(common.get(i)));
				 String description = d.getDescription(docDict.get(common.get(i)), query);
				 descriptions.add(description);
			 }
			 
		indexFile.close();
		x.add(fileNames);
		x.add(descriptions);
		return x;
		//return fileNames;
		//return postingLists;

		} catch (Exception e) { System.out.println("ERROR " + e); }

		return null;
	}
}