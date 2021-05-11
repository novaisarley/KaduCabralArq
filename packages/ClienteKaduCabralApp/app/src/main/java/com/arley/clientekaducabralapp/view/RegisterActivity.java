package com.arley.clientekaducabralapp.view;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.arley.clientekaducabralapp.R;
import com.arley.clientekaducabralapp.model.User;

public class RegisterActivity extends AppCompatActivity {

    Button btNext;
    EditText edtName, edtEmail, edtPassword, edtConfirmPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        btNext = findViewById(R.id.activity_register_bt_next);

        edtName = findViewById(R.id.activity_register_edt_name);
        edtEmail = findViewById(R.id.activity_register_edt_email);
        edtPassword = findViewById(R.id.activity_register_edt_password);
        edtConfirmPassword = findViewById(R.id.activity_register_edt_confirm_password);

        btNext.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String name = edtName.getText().toString().trim();
                String email = edtEmail.getText().toString().trim();
                String password = edtPassword.getText().toString().trim();
                String confirmPassword = edtConfirmPassword.getText().toString().trim();

                if (!name.isEmpty() && !email.isEmpty() && !password.isEmpty() && !confirmPassword.isEmpty()){
                    if (email.contains("@")){
                        if (password.equals(confirmPassword)){
                            if (password.length() >= 6){
                                User user = new User(name, email, "", "", "", "0.0");

                                Intent i = new Intent(RegisterActivity.this, SendCodeActivity.class);
                                i.putExtra("user", user);
                                i.putExtra("password", password);
                                startActivity(i);
                            }else {
                                Toast.makeText(RegisterActivity.this
                                        , "A senha deve conter pelo menos 6 caracteres", Toast.LENGTH_SHORT).show();
                            }

                        }else {
                            Toast.makeText(RegisterActivity.this, "Os campos senha e confirmar senha não coincidem", Toast.LENGTH_SHORT).show();
                        }
                    }else {
                        Toast.makeText(RegisterActivity.this, "Email inválido", Toast.LENGTH_SHORT).show();
                    }

                }else {
                    Toast.makeText(RegisterActivity.this, "Preencha todos os campos", Toast.LENGTH_SHORT).show();
                }


            }
        });
    }
}