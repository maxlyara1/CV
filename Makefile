XELATEX := xelatex -interaction=nonstopmode -halt-on-error

.PHONY: all ru en clean

all: ru en clean

ru: Lyara_MLE_CV.pdf

en: Lyara_MLE_CV_EN.pdf

Lyara_MLE_CV.pdf: Lyara_MLE_CV.tex
	$(XELATEX) Lyara_MLE_CV.tex
	$(XELATEX) Lyara_MLE_CV.tex

Lyara_MLE_CV_EN.pdf: Lyara_MLE_CV_EN.tex
	$(XELATEX) Lyara_MLE_CV_EN.tex
	$(XELATEX) Lyara_MLE_CV_EN.tex

clean:
	rm -f *.aux *.log *.out *.toc *.synctex.gz
