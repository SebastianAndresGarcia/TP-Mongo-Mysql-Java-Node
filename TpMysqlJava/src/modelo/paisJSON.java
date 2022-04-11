package modelo;

import java.util.*;

public class paisJSON {
	private String name;
    private List<String> callingCodes=new ArrayList<>();
    private String capital;
    private String region;
    private long population;
    private List<Double> latlng=new ArrayList<>();
    
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<String> getCallingCodes() {
		return callingCodes;
	}
	public void setCallingCodes(List<String> callingCodes) {
		this.callingCodes = callingCodes;
	}
	public String getCapital() {
		return capital;
	}
	public void setCapital(String capital) {
		this.capital = capital;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public long getPopulation() {
		return population;
	}
	public void setPopulation(long population) {
		this.population = population;
	}
	public List<Double> getlatlng() {
		return latlng;
	}
	public void setlatlng(List<Double> latlng) {
		latlng = latlng;
	}
    
    
}
