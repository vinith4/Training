package com.vinith;

import org.testng.Assert;
import org.testng.annotations.Test;

public class svkTest {

	@Test
	public void testlogin1()  
	{
		svk myapp=new svk();
		Assert.assertEquals(0,myapp.userLogin("abc", "abc123"));
		
	}
	
	@Test
	public void testlogin2() {
		svk myapp =new svk();
		Assert.assertEquals(1, myapp.userLogin("abc", "abc@123"));
	}
}
 