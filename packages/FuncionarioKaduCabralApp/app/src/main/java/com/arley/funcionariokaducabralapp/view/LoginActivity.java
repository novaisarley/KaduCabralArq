package com.arley.funcionariokaducabralapp.view;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.arley.funcionariokaducabralapp.R;

public class LoginActivity extends AppCompatActivity {

    Button btLogin;
    ProgressBar progressBar;
    EditText edtEmail, edtPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        btLogin = findViewById(R.id.activity_login_bt_login);
        progressBar = findViewById(R.id.activity_login_progressbar);

        edtEmail = findViewById(R.id.activity_login_edt_email);
        edtPassword = findViewById(R.id.activity_login_edt_password);

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

    private void verifyEmployee(String uid) {

    }

    @Override
    protected void onResume() {
        super.onResume();
            //verifyEmployee(mAuth.getCurrentUser().getUid());

    }

}