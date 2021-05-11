package com.arley.funcionariokaducabralapp.model;

public class Employee {
    String name;
    String email;
    String type;
    String uid;

    public Employee() {
    }

    public Employee(String name, String email, String type, String uid) {
        this.name = name;
        this.email = email;
        this.type = type;
        this.uid = uid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }
}
