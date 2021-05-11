package com.arley.clientekaducabralapp.view;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.arley.clientekaducabralapp.R;
import com.arley.clientekaducabralapp.model.User;

public class SendCodeActivity extends AppCompatActivity {

    Button btSend;
    EditText edtNumber;
    TextView tvCountryCode;
    ProgressBar progressBar;
    String number = "";
    User user;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_send_code);

        btSend = findViewById(R.id.activity_send_code_bt_send);
        edtNumber = findViewById(R.id.activity_send_code_edt_number);
        progressBar = findViewById(R.id.activity_send_code_progressbar);
        tvCountryCode = findViewById(R.id.activity_send_code_tv_country_code);

        user = getIntent().getExtras().getParcelable("user");

        btSend.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (edtNumber.getText().toString().trim().isEmpty()) {
                    Toast.makeText(SendCodeActivity.this, "Preencha o número de telefone", Toast.LENGTH_SHORT).show();
                    return;
                }
                verifyPhoneExistence("+55" + edtNumber.getText().toString().trim());

            }
        });


        //IMPORTANTE COLOCAR ESTA PARTE
        /*user.setPhone(number);
        /*Intent i = new Intent(SendCodeActivity.this, VerifyCodeActivity.class);
        /*i.putExtra("user", user);
        /*i.putExtra("password", getIntent().getExtras().getString("password"));
        /*i.putExtra("verificationId", verificationId);
        /*startActivity(i);*/

    }

    private void verifyPhoneExistence(String number) {
        String code = number.replace("+", "");

        sendSMSCode(number);
    }

    private void sendSMSCode(String phoneNumber){
        progressBar.setVisibility(View.VISIBLE);
        btSend.setVisibility(View.GONE);

        number = tvCountryCode.getText().toString() + edtNumber.getText().toString().trim();

    }

}