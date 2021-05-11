package com.arley.funcionariokaducabralapp.view;

import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.arley.funcionariokaducabralapp.R;
import com.arley.funcionariokaducabralapp.model.User;

import java.math.BigDecimal;
import java.text.NumberFormat;
import java.util.Locale;

public class CashActivity extends AppCompatActivity {

    TextView tvName, tvEmail, tvPhone, tvBalance;
    ProgressBar pg;
    EditText edtCash;
    Button btConfirm;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cash);

        edtCash = findViewById(R.id.edt_cash);
        btConfirm = findViewById(R.id.bt_confirm);
        pg = findViewById(R.id.progress_bar_cash);

        tvBalance = findViewById(R.id.tv_balance);
        tvName = findViewById(R.id.tv_name);
        tvEmail = findViewById(R.id.tv_email);
        tvPhone = findViewById(R.id.tv_phone);

        btConfirm.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String cashNotFormatted = edtCash.getText().toString();

                String cashFormatted = cashNotFormatted.replace(" ", "");
                cashFormatted = cashFormatted.replace("R$", "");
                cashFormatted = cashFormatted.replace(".", "");
                cashFormatted = cashFormatted.replace(",", ".");
                cashFormatted.trim();

                cashFormatted = cashFormatted.substring(1, cashFormatted.length());


            }
        });

        edtCash.addTextChangedListener(new MascaraMonetaria(edtCash));

    }

    private class MascaraMonetaria implements TextWatcher {

        final EditText campo;

        public MascaraMonetaria(EditText campo) {
            super();
            this.campo = campo;
        }

        private boolean isUpdating = false;
        // Pega a formatacao do sistema, se for brasil R$ se EUA US$
        private NumberFormat nf = NumberFormat.getCurrencyInstance(new Locale("pt", "BR"));

        @Override
        public void onTextChanged(CharSequence s, int start, int before,
                                  int after) {
            // Evita que o método seja executado varias vezes.
            // Se tirar ele entre em loop
            if (isUpdating) {
                isUpdating = false;
                return;
            }

            isUpdating = true;
            String str = s.toString();
            // Verifica se já existe a máscara no texto.

            str = str.replaceAll("[^\\d]", "");

            try {
                // Transformamos o número que está escrito no EditText em
                // monetário.
                str = nf.format(Double.parseDouble(str) / 100);
                campo.setText(str);
                campo.setSelection(campo.getText().length());
            } catch (NumberFormatException e) {
                s = "";
            }
        }

        @Override
        public void beforeTextChanged(CharSequence s, int start, int count,
                                      int after) {
            // Não utilizado
        }

        @Override
        public void afterTextChanged(Editable s) {
            // Não utilizado
        }
    }
}