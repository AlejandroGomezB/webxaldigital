package com.webxaldigital.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PantallaController {
	
	@Value("${servicio}")
	private String ws;
	
	 @GetMapping("/")
	 public String handleError(Model model) {
		 model.addAttribute("servicioweb", ws);
		 return "portal";
	 }

}
