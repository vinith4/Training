package com.vinith.demo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class HomeController 
{
    @RequestMapping("/home")
	public ModelAndView home(vinith vinith)
 
    { 
    	ModelAndView mv = new ModelAndView();
       	System.out.println("hi "+ vinith);
       	mv.addObject("obj",vinith);
       	mv.setViewName("home.jsp");
        return mv;
        
    }   
}
