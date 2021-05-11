package com.arley.funcionariokaducabralapp.model;

import android.os.Parcel;
import android.os.Parcelable;

public class User implements Parcelable {
    String name;
    String email;
    String phone;
    String code;
    String uid;
    String balance;

    public User(){

    }

    public User(String name, String email, String phone, String code, String uid, String balance) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.code = code;
        this.uid = uid;
        this.balance = balance;
    }

    protected User(Parcel in) {
        name = in.readString();
        email = in.readString();
        phone = in.readString();
        code = in.readString();
        uid = in.readString();
        balance = in.readString();
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        dest.writeString(name);
        dest.writeString(email);
        dest.writeString(phone);
        dest.writeString(code);
        dest.writeString(uid);
        dest.writeString(balance);
    }

    @Override
    public int describeContents() {
        return 0;
    }

    public static final Creator<User> CREATOR = new Creator<User>() {
        @Override
        public com.arley.funcionariokaducabralapp.model.User createFromParcel(Parcel in) {
            return new com.arley.funcionariokaducabralapp.model.User(in);
        }

        @Override
        public com.arley.funcionariokaducabralapp.model.User[] newArray(int size) {
            return new com.arley.funcionariokaducabralapp.model.User[size];
        }
    };

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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getBalance() {
        return balance;
    }

    public void setBalance(String balance) {
        this.balance = balance;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", code='" + code + '\'' +
                ", uid='" + uid + '\'' +
                ", balance=" + balance +
                '}';
    }
}
