package com.arley.clientekaducabralapp.view;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.arley.clientekaducabralapp.R;

public class LoginActivity extends AppCompatActivity {

    Button btLogin;
    TextView tvGoRegister;
    ProgressBar progressBar;
    EditText edtEmail, edtPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        tvGoRegister = findViewById(R.id.activity_login_tv_go_register);
        btLogin = findViewById(R.id.activity_login_bt_login);
        progressBar = findViewById(R.id.activity_login_progressbar);

        edtEmail = findViewById(R.id.activity_login_edt_email);
        edtPassword = findViewById(R.id.activity_login_edt_password);

        tvGoRegister.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(LoginActivity.this, RegisterActivity.class));
            }
        });

        btLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (!edtPassword.getText().toString().trim().isEmpty() && !edtPassword.getText().toString().trim().isEmpty()){
                    String email = edtEmail.getText().toString().trim();
                    String pass = edtPassword.getText().toString().trim();

                    btLogin.setVisibility(View.GONE);
                    progressBar.setVisibility(View.VISIBLE);


                }else {
                    Toast.makeText(LoginActivity.this, "Preencha todos os campos", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }

    @Override
    protected void onResume() {
        super.onResume();
    }
}