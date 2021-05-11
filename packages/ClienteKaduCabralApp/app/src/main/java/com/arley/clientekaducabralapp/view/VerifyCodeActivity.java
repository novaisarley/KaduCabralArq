package com.arley.clientekaducabralapp.view;

import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import com.arley.clientekaducabralapp.R;
import com.arley.clientekaducabralapp.model.User;


public class VerifyCodeActivity extends AppCompatActivity {

    EditText edtCode1, edtCode2, edtCode3, edtCode4, edtCode5, edtCode6;
    Button btVerify;
    ProgressBar progressBar;
    TextView tvResend, tvNumber;
    String verificationId;

    User user;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_verify_code);

        user = getIntent().getExtras().getParcelable("user");

        tvResend = findViewById(R.id.activity_verify_code_tv_resend);
        tvNumber = findViewById(R.id.activity_verify_code_tv_number);

        btVerify = findViewById(R.id.activity_verify_code_bt_verify);
        progressBar = findViewById(R.id.activity_verify_code_progressbar);

        edtCode1 = findViewById(R.id.input_code1);
        edtCode2 = findViewById(R.id.input_code2);
        edtCode3 = findViewById(R.id.input_code3);
        edtCode4 = findViewById(R.id.input_code4);
        edtCode5 = findViewById(R.id.input_code5);
        edtCode6 = findViewById(R.id.input_code6);

        setUpCodeInputs();

        tvNumber.setText(getIntent().getExtras().getString("number"));
        verificationId = getIntent().getExtras().getString("verificationId");

        btVerify.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (edtCode1.getText().toString().trim().isEmpty()
                        || edtCode2.getText().toString().trim().isEmpty()
                        || edtCode3.getText().toString().trim().isEmpty()
                        || edtCode4.getText().toString().trim().isEmpty()
                        || edtCode5.getText().toString().trim().isEmpty()
                        || edtCode6.getText().toString().trim().isEmpty()) {

                    Toast.makeText(VerifyCodeActivity.this
                            , "Preencha corretamente o código"
                            , Toast.LENGTH_SHORT).show();

                    return;
                }

                String code = edtCode1.getText().toString() +
                        edtCode2.getText().toString() +
                        edtCode3.getText().toString() +
                        edtCode4.getText().toString() +
                        edtCode5.getText().toString() +
                        edtCode6.getText().toString();

                if (verificationId != null) {
                    progressBar.setVisibility(View.VISIBLE);
                    btVerify.setVisibility(View.GONE);

                     /*String code = user.getPhone().replace("+", "");
                     user.setCode(code);
                     createUserAuth(user, phoneAuthCredential);

                     Toast.makeText(VerifyCodeActivity.this, "Código Inválido", Toast.LENGTH_SHORT).show();*/

                }
            }
        });

        tvResend.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });

    }

    void createUserAuth(User user) {

    }

    void setUpCodeInputs() {
        edtCode1.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {
            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                if (!s.toString().trim().isEmpty()) {
                    edtCode2.requestFocus();
                }
            }

            @Override
            public void afterTextChanged(Editable s) {

            }
        });
        edtCode2.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                if (!s.toString().trim().isEmpty()) {
                    edtCode3.requestFocus();
                }
            }

            @Override
            public void afterTextChanged(Editable s) {

            }
        });
        edtCode3.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                if (!s.toString().trim().isEmpty()) {
                    edtCode4.requestFocus();
                }
            }

            @Override
            public void afterTextChanged(Editable s) {

            }
        });
        edtCode4.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                if (!s.toString().trim().isEmpty()) {
                    edtCode5.requestFocus();
                }
            }

            @Override
            public void afterTextChanged(Editable s) {

            }
        });
        edtCode5.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                if (!s.toString().trim().isEmpty()) {
                    edtCode6.requestFocus();
                }
            }

            @Override
            public void afterTextChanged(Editable s) {

            }
        });
    }

}